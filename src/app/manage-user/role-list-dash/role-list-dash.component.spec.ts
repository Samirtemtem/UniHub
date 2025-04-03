import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleListDashComponent } from './role-list-dash.component';

describe('RoleListDashComponent', () => {
  let component: RoleListDashComponent;
  let fixture: ComponentFixture<RoleListDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleListDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
