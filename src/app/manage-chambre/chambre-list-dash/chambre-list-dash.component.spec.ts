import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreListDashComponent } from './chambre-list-dash.component';

describe('ChambreListDashComponent', () => {
  let component: ChambreListDashComponent;
  let fixture: ComponentFixture<ChambreListDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreListDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
