import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateFoyerDashComponent } from './update-foyer.component';


describe('UpdateFoyerComponent', () => {
  let component: UpdateFoyerDashComponent;
  let fixture: ComponentFixture<UpdateFoyerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFoyerDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFoyerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
