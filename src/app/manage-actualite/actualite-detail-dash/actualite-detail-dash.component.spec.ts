import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteDetailDashComponent } from './actualite-detail-dash.component';

describe('ActualiteDetailDashComponent', () => {
  let component: ActualiteDetailDashComponent;
  let fixture: ComponentFixture<ActualiteDetailDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteDetailDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteDetailDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
