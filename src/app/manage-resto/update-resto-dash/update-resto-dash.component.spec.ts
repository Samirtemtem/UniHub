import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestoDashComponent } from './update-resto-dash.component';

describe('UpdateRestoDashComponent', () => {
  let component: UpdateRestoDashComponent;
  let fixture: ComponentFixture<UpdateRestoDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestoDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
