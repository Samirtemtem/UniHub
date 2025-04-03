import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialiteDialogDashComponent } from './add-specialite-dialog-dash.component';

describe('AddSpecialiteDialogDashComponent', () => {
  let component: AddSpecialiteDialogDashComponent;
  let fixture: ComponentFixture<AddSpecialiteDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecialiteDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpecialiteDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
