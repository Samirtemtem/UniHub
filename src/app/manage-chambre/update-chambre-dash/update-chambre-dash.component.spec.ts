import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChambreDashComponent } from './update-chambre-dash.component';

describe('UpdateChambreDashComponent', () => {
  let component: UpdateChambreDashComponent;
  let fixture: ComponentFixture<UpdateChambreDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChambreDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateChambreDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
