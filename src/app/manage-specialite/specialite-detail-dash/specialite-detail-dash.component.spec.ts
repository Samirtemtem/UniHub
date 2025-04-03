import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteDetailDashComponent } from './specialite-detail-dash.component';

describe('SpecialiteDetailDashComponent', () => {
  let component: SpecialiteDetailDashComponent;
  let fixture: ComponentFixture<SpecialiteDetailDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteDetailDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialiteDetailDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
