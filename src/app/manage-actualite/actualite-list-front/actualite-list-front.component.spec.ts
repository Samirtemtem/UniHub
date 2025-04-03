import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteListFrontComponent } from './actualite-list-front.component';

describe('ActualiteListFrontComponent', () => {
  let component: ActualiteListFrontComponent;
  let fixture: ComponentFixture<ActualiteListFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteListFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteListFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
