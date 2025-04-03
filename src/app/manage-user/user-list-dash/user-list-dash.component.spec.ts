import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListDashComponent } from './user-list-dash.component';

describe('UserListDashComponent', () => {
  let component: UserListDashComponent;
  let fixture: ComponentFixture<UserListDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
