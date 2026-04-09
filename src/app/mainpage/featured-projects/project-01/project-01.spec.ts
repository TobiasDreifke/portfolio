import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project01 } from './project-01';

describe('Project01', () => {
  let component: Project01;
  let fixture: ComponentFixture<Project01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
