import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpecialiteDialog2DashComponent } from './delete-specialite-dialog2-dash.component';

describe('DeleteSpecialiteDialog2DashComponent', () => {
  let component: DeleteSpecialiteDialog2DashComponent;
  let fixture: ComponentFixture<DeleteSpecialiteDialog2DashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSpecialiteDialog2DashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSpecialiteDialog2DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
