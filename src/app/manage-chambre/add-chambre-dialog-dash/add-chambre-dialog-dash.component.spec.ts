import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChambreDialogDashComponent } from './add-chambre-dialog-dash.component';

describe('AddChambreDialogDashComponent', () => {
  let component: AddChambreDialogDashComponent;
  let fixture: ComponentFixture<AddChambreDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChambreDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChambreDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
