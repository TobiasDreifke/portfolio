import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { LegalNotice } from './imprint/legal-notice/legal-notice';
import { Privacy } from './privacy/privacy';

export const routes: Routes = [
    { path: '', component: Mainpage, data: { robots: 'index, follow' } },
    { path: 'legal', component: LegalNotice, data: { robots: 'noindex, nofollow' } },
    { path: 'privacy', component: Privacy, data: { robots: 'noindex, nofollow' } },
];
