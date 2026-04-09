import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTestimonial } from './single-testimonial';

describe('SingleTestimonial', () => {
  let component: SingleTestimonial;
  let fixture: ComponentFixture<SingleTestimonial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTestimonial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTestimonial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
