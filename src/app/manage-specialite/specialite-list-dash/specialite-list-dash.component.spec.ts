import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteListDashComponent } from './specialite-list-dash.component';

describe('SpecialiteListDashComponent', () => {
  let component: SpecialiteListDashComponent;
  let fixture: ComponentFixture<SpecialiteListDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteListDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialiteListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
