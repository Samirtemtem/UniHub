import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleDialogDashComponent } from './add-role-dialog-dash.component';

describe('AddRoleDialogDashComponent', () => {
  let component: AddRoleDialogDashComponent;
  let fixture: ComponentFixture<AddRoleDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoleDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoleDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
