import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateImage } from './generate-image';

describe('GenerateImage', () => {
  let component: GenerateImage;
  let fixture: ComponentFixture<GenerateImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
