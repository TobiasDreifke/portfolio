import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar', imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})

export class Navbar {
  isMenuOpen = false;

  activeLanguage: 'EN' | 'DE' = 'EN';
  private translate = inject(TranslateService);

  toggleLang() {
    this.activeLanguage = this.activeLanguage === 'EN' ? 'DE' : 'EN'; this.translate.use(this.activeLanguage.toLowerCase());
  }

  setLanguage(lang: 'EN' | 'DE') {
    this.activeLanguage = lang; this.translate.use(lang.toLowerCase());
  }

  activeSection: string = '';

  setActive(section: string) {
    this.activeSection = section;
    this.isMenuOpen = false;


    document.body.style.overflow = '';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}