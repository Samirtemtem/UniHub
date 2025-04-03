import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeDialogeComponent } from './qrcode-dialoge.component';

describe('QrcodeDialogeComponent', () => {
  let component: QrcodeDialogeComponent;
  let fixture: ComponentFixture<QrcodeDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeDialogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
