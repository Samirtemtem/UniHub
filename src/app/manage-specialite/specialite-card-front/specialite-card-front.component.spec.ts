import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteCardFrontComponent } from './specialite-card-front.component';

describe('SpecialiteCardFrontComponent', () => {
  let component: SpecialiteCardFrontComponent;
  let fixture: ComponentFixture<SpecialiteCardFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteCardFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialiteCardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
