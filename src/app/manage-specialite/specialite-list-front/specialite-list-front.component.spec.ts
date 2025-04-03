import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteListFrontComponent } from './specialite-list-front.component';

describe('SpecialiteListFrontComponent', () => {
  let component: SpecialiteListFrontComponent;
  let fixture: ComponentFixture<SpecialiteListFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteListFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialiteListFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
