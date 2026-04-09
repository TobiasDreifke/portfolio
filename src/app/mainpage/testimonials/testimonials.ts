import { Component } from '@angular/core';
import { Testimonial } from '../../interfaces/testimonial.interface';
import { SingleTestimonial } from './single-testimonial/single-testimonial';
import { TESTIMONIALS } from '../../data/testimonials.data';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [SingleTestimonial, CommonModule, TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss']
})
export class Testimonials {
  testimonials: Testimonial[] = TESTIMONIALS;
  currentIndex = 0;

  get visibleItems(): Testimonial[] {
    const length = this.testimonials.length;
    const prev = this.testimonials[(this.currentIndex - 1 + length) % length];
    const current = this.testimonials[this.currentIndex];
    const next = this.testimonials[(this.currentIndex + 1) % length];
    return [prev, current, next];
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  get wrapperTransform(): string {
  const boxWidth = 600; 
  const gap = 32;
  const offset = (boxWidth + gap) * this.currentIndex;
  return `translateX(-${offset}px)`;
}
}
