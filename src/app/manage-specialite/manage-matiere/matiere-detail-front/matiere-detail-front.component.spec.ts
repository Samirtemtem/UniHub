import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereDetailFrontComponent } from './matiere-detail-front.component';

describe('MatiereDetailFrontComponent', () => {
  let component: MatiereDetailFrontComponent;
  let fixture: ComponentFixture<MatiereDetailFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereDetailFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatiereDetailFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
