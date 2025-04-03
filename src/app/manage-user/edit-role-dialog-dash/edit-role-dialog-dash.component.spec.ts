import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoleDialogDashComponent } from './edit-role-dialog-dash.component';

describe('EditRoleDialogDashComponent', () => {
  let component: EditRoleDialogDashComponent;
  let fixture: ComponentFixture<EditRoleDialogDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRoleDialogDashComponent]
    });
    fixture = TestBed.createComponent(EditRoleDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
