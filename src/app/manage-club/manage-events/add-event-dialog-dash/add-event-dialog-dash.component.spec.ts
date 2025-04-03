import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventDialogDashComponent } from './add-event-dialog-dash.component';

describe('AddEventDialogDashComponent', () => {
  let component: AddEventDialogDashComponent;
  let fixture: ComponentFixture<AddEventDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
