import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteDetailFrontComponent } from './specialite-detail-front.component';

describe('SpecialiteDetailFrontComponent', () => {
  let component: SpecialiteDetailFrontComponent;
  let fixture: ComponentFixture<SpecialiteDetailFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteDetailFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialiteDetailFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
