import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActualiteDialogDashComponent } from './update-actualite-dialog-dash.component';

describe('UpdateActualiteDialogDashComponent', () => {
  let component: UpdateActualiteDialogDashComponent;
  let fixture: ComponentFixture<UpdateActualiteDialogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActualiteDialogDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActualiteDialogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
