import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEventFrontComponent } from './show-event-front.component';

describe('ShowEventFrontComponent', () => {
  let component: ShowEventFrontComponent;
  let fixture: ComponentFixture<ShowEventFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEventFrontComponent]
    });
    fixture = TestBed.createComponent(ShowEventFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
