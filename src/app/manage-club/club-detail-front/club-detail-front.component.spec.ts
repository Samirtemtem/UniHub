import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDetailFrontComponent } from './club-detail-front.component';

describe('ClubDetailFrontComponent', () => {
  let component: ClubDetailFrontComponent;
  let fixture: ComponentFixture<ClubDetailFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubDetailFrontComponent]
    });
    fixture = TestBed.createComponent(ClubDetailFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
