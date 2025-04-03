import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerListDashComponent } from './foyer-list-dash.component';

describe('FoyerListDashComponent', () => {
  let component: FoyerListDashComponent;
  let fixture: ComponentFixture<FoyerListDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerListDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
