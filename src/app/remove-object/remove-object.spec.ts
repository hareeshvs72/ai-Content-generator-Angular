import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveObject } from './remove-object';

describe('RemoveObject', () => {
  let component: RemoveObject;
  let fixture: ComponentFixture<RemoveObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveObject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveObject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
