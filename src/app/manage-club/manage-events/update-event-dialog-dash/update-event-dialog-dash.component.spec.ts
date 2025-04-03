import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEventDialogDashComponent } from './update-event-dialog-dash.component';

describe('UpdateEventDialogDashComponent', () => {
  let component: UpdateEventDialogDashComponent;
  let fixture: ComponentFixture<UpdateEventDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEventDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEventDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
