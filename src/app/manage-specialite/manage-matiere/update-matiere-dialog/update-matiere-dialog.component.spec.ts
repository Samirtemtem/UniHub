import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMatiereDialogComponent } from './update-matiere-dialog.component';

describe('UpdateMatiereDialogComponent', () => {
  let component: UpdateMatiereDialogComponent;
  let fixture: ComponentFixture<UpdateMatiereDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMatiereDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMatiereDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
