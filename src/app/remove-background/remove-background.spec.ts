import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBackground } from './remove-background';

describe('RemoveBackground', () => {
  let component: RemoveBackground;
  let fixture: ComponentFixture<RemoveBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
