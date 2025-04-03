import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubListFrontComponent } from './club-list-front.component';

describe('ClubListFrontComponent', () => {
  let component: ClubListFrontComponent;
  let fixture: ComponentFixture<ClubListFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubListFrontComponent]
    });
    fixture = TestBed.createComponent(ClubListFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
