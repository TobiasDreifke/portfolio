import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _isModalOpen = signal(false);
  private scrollPosition = 0;
  private openCount = 0; // tracks nested modals

  isModalOpen() {
    return this._isModalOpen();
  }

  openModal() {
    // if already open, just increment counter
    this.openCount++;
    if (this.openCount > 1) {
      this._isModalOpen.set(true);
      return;
    }

    this._isModalOpen.set(true);

    // save scroll
    this.scrollPosition = window.scrollY || window.pageYOffset || 0;

    // compute scrollbar width so layout doesn't shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // lock body visually at current position
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${this.scrollPosition}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // optional class for styling (if you want)
    body.classList.add('modal-open');
  }

  closeModal() {
    if (this.openCount > 1) {
      this.openCount--;
      return;
    }

    if (this.openCount === 0) return; // nothing to close
    this.openCount = 0;

    this._isModalOpen.set(false);

    const body = document.body;

    // remove lock styles
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    body.style.width = '';
    body.style.paddingRight = '';
    body.classList.remove('modal-open');

    // restore scroll
    window.scrollTo({ top: this.scrollPosition, behavior: 'instant' as any /*behavior not needed*/ });
    this.scrollPosition = 0;
  }
}
