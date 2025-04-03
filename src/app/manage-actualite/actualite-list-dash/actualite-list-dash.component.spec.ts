import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteListDashComponent } from './actualite-list-dash.component';

describe('ActualiteListDashComponent', () => {
  let component: ActualiteListDashComponent;
  let fixture: ComponentFixture<ActualiteListDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteListDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
