import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterModule, CommonModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true,
})
export class Contact {

  private http = inject(HttpClient);
  messageSent = false;
  mailTest = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // form model
  contactData = {
    name: '',
    email: '',
    message: '',
    agree: false,
    website: '',
  };

  resetContactData() {
    this.contactData = {
      name: '',
      email: '',
      message: '',
      agree: false,
      website: '',
    };
  }


  post = {
    endPoint: 'https://tobiasdreifke.com/sendMail.php',
    body: (payload: any) => payload,
    options: {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text' as const,
    },
  };


  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid || !this.contactData.agree) {
      console.warn('Form invalid or user did not agree');
      return;
    }

    this.http
      .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: (response) => {
          console.info('Mail sent successfully:', response);
          this.messageSent = true;
          ngForm.resetForm();
          this.resetContactData();
          setTimeout(() => this.messageSent = false, 1500);
        },
        error: (error) => {
          console.error('Error sending mail:', error);
        },
        complete: () => console.info('send post complete'),
      });
  }
}

