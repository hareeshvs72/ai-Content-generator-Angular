import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewResume } from './review-resume';

describe('ReviewResume', () => {
  let component: ReviewResume;
  let fixture: ComponentFixture<ReviewResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
