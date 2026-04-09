import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../interfaces/testimonial.interface';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-single-testimonial',
  imports: [TranslatePipe],
  templateUrl: './single-testimonial.html',
  styleUrl: './single-testimonial.scss'
})
export class SingleTestimonial {
  @Input()
  single_testimonial!: Testimonial;
}
