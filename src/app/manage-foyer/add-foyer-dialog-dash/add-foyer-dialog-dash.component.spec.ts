import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoyerDialogDashComponent } from './add-foyer-dialog-dash.component';

describe('AddFoyerDialogDashComponent', () => {
  let component: AddFoyerDialogDashComponent;
  let fixture: ComponentFixture<AddFoyerDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoyerDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoyerDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
