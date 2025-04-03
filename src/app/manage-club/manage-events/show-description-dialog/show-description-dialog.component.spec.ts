import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDescriptionDialogComponent } from './show-description-dialog.component';

describe('ShowDescriptionDialogComponent', () => {
  let component: ShowDescriptionDialogComponent;
  let fixture: ComponentFixture<ShowDescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDescriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
