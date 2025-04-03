import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActualiteDialogDashComponent } from './add-actualite-dialog-dash.component';

describe('AddActualiteDialogDashComponent', () => {
  let component: AddActualiteDialogDashComponent;
  let fixture: ComponentFixture<AddActualiteDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActualiteDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActualiteDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
