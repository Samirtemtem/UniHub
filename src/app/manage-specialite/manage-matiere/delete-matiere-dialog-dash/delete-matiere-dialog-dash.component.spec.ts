import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMatiereDialogDashComponent } from './delete-matiere-dialog-dash.component';

describe('DeleteMatiereDialogDashComponent', () => {
  let component: DeleteMatiereDialogDashComponent;
  let fixture: ComponentFixture<DeleteMatiereDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMatiereDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMatiereDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
