import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailDashComponent } from './restaurant-detail-dash.component';

describe('RestaurantDetailDashComponent', () => {
  let component: RestaurantDetailDashComponent;
  let fixture: ComponentFixture<RestaurantDetailDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDetailDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
