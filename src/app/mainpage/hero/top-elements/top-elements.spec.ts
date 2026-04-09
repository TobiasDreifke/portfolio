import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopElements } from './top-elements';

describe('TopElements', () => {
  let component: TopElements;
  let fixture: ComponentFixture<TopElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopElements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopElements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
