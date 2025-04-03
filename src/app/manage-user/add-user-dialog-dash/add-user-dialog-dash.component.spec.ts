import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDialogDashComponent } from './add-user-dialog-dash.component';

describe('AddUserDialogDashComponent', () => {
  let component: AddUserDialogDashComponent;
  let fixture: ComponentFixture<AddUserDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
