import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDialogDashComponent } from './edit-user-dialog-dash.component';

describe('EditUserDialogDashComponent', () => {
  let component: EditUserDialogDashComponent;
  let fixture: ComponentFixture<EditUserDialogDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserDialogDashComponent]
    });
    fixture = TestBed.createComponent(EditUserDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
