import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatiereDialogDashComponent } from './add-matiere-dialog-dash.component';

describe('AddMatiereDialogDashComponent', () => {
  let component: AddMatiereDialogDashComponent;
  let fixture: ComponentFixture<AddMatiereDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMatiereDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMatiereDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
