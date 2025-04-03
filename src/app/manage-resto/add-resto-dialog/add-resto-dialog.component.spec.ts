import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestoDialogComponent } from './add-resto-dialog.component';

describe('AddRestoDialogComponent', () => {
  let component: AddRestoDialogComponent;
  let fixture: ComponentFixture<AddRestoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
