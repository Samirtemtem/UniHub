import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoListDashComponent } from './resto-list-dash.component';

describe('RestoListDashComponent', () => {
  let component: RestoListDashComponent;
  let fixture: ComponentFixture<RestoListDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoListDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
