<?php

$allowedOrigins = [
    'https://tobiasdreifke.com',
    'https://www.tobiasdreifke.com',
    'http://localhost:4200',
    'http://127.0.0.1:4200',
];

function applyCors(array $allowedOrigins): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if ($origin === '') {
        return;
    }

    if (!in_array($origin, $allowedOrigins, true)) {
        http_response_code(403);
        echo 'Origin not allowed';
        exit;
    }

    header("Access-Control-Allow-Origin: {$origin}");
    header('Vary: Origin');
}

function reject(int $statusCode, string $message): void
{
    http_response_code($statusCode);
    echo $message;
    exit;
}

function stringLength(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

function sanitizeSingleLine(string $value): string
{
    $value = trim(strip_tags($value));
    $value = preg_replace('/[\r\n\t]+/', ' ', $value) ?? $value;
    $value = preg_replace('/\s+/', ' ', $value) ?? $value;

    return $value;
}

function sanitizeMessage(string $value): string
{
    $value = trim(strip_tags($value));
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace("/\n{3,}/", "\n\n", $value) ?? $value;

    return $value;
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'OPTIONS':
        applyCors($allowedOrigins);
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Max-Age: 86400');
        http_response_code(204);
        exit;

    case 'POST':
        applyCors($allowedOrigins);

        $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
        if (stripos($contentType, 'application/json') !== 0) {
            reject(415, 'Unsupported content type');
        }

        $json = file_get_contents('php://input');
        if ($json === false || strlen($json) > 10000) {
            reject(413, 'Payload too large');
        }

        $params = json_decode($json);
        if (!is_object($params) || json_last_error() !== JSON_ERROR_NONE) {
            reject(400, 'Invalid JSON');
        }

        $email = filter_var($params->email ?? '', FILTER_VALIDATE_EMAIL);
        $name = sanitizeSingleLine((string)($params->name ?? ''));
        $userMessage = sanitizeMessage((string)($params->message ?? ''));
        $agree = $params->agree ?? false;
        $honeypot = trim((string)($params->website ?? ''));

        if ($honeypot !== '') {
            reject(400, 'Invalid input');
        }

        if (!$email || $agree !== true) {
            reject(400, 'Invalid input');
        }

        if (stringLength($name) < 2 || stringLength($name) > 100) {
            reject(400, 'Invalid name');
        }

        if (stringLength($userMessage) < 10 || stringLength($userMessage) > 5000) {
            reject(400, 'Invalid message');
        }

        $recipient = 'mail@tobiasdreifke.com';
        $safeName = str_replace('"', "'", $name);
        $subject = "Contact Form Submission from {$safeName} <{$email}>";
        $plainText = "From: {$safeName} <{$email}>\n\n{$userMessage}";
        $escapedMessage = nl2br(htmlspecialchars($userMessage, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
        $boundary = md5(uniqid((string)time(), true));

        $htmlText = "
        <html>
          <body>
            <p><strong>From:</strong> {$safeName} &lt;{$email}&gt;</p>
            <p>{$escapedMessage}</p>
          </body>
        </html>";

        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'From: noreply@tobiasdreifke.com';
        $headers[] = "Reply-To: {$email}";
        $headers[] = "Content-Type: multipart/alternative; boundary=\"{$boundary}\"";

        $body = "--{$boundary}\r\n";
        $body .= "Content-Type: text/plain; charset=utf-8\r\n\r\n";
        $body .= $plainText . "\r\n";
        $body .= "--{$boundary}\r\n";
        $body .= "Content-Type: text/html; charset=utf-8\r\n\r\n";
        $body .= $htmlText . "\r\n";
        $body .= "--{$boundary}--";

        if (mail($recipient, $subject, $body, implode("\r\n", $headers))) {
            echo 'OK';
            exit;
        }

        reject(500, 'Error sending mail');

    default:
        header('Allow: POST, OPTIONS', true, 405);
        exit;
}
