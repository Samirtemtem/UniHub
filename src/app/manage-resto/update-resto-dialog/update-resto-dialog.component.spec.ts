import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestoDialogComponent } from './update-resto-dialog.component';

describe('UpdateRestoDialogComponent', () => {
  let component: UpdateRestoDialogComponent;
  let fixture: ComponentFixture<UpdateRestoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
