import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventDashComponent } from './list-event-dash.component';

describe('ListEventDashComponent', () => {
  let component: ListEventDashComponent;
  let fixture: ComponentFixture<ListEventDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEventDashComponent]
    });
    fixture = TestBed.createComponent(ListEventDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
