import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpecialiteDialogDashComponent } from './delete-specialite-dialog-dash.component';

describe('DeleteSpecialiteDialogDashComponent', () => {
  let component: DeleteSpecialiteDialogDashComponent;
  let fixture: ComponentFixture<DeleteSpecialiteDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSpecialiteDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSpecialiteDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
