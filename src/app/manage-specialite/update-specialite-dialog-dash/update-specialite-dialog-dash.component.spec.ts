import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecialiteDialogDashComponent } from './update-specialite-dialog-dash.component';

describe('UpdateSpecialiteDialogDashComponent', () => {
  let component: UpdateSpecialiteDialogDashComponent;
  let fixture: ComponentFixture<UpdateSpecialiteDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSpecialiteDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSpecialiteDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
