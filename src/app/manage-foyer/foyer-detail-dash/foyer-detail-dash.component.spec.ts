import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerDetailDashComponent } from './foyer-detail-dash.component';

describe('FoyerDetailDashComponent', () => {
  let component: FoyerDetailDashComponent;
  let fixture: ComponentFixture<FoyerDetailDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerDetailDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerDetailDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
