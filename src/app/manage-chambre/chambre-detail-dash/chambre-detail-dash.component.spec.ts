import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreDetailDashComponent } from './chambre-detail-dash.component';

describe('ChambreDetailDashComponent', () => {
  let component: ChambreDetailDashComponent;
  let fixture: ComponentFixture<ChambreDetailDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreDetailDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreDetailDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
