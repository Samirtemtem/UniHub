import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Chambre } from "../model/chambre";
import { ChambreService } from "../chambre.service";

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.scss']
})
export class ShowOneComponent {


  @Input() dataIn: any;
  @Output() msg = new EventEmitter();


  constructor(private s: ChambreService) {
  }

  ngOnInit(): void {
    this.getImage(this.dataIn.imageUrl);
    console.log("data in showOne : ", this.dataIn)
  }

  imageUrl: string | ArrayBuffer | null;

  getImage(file: any) {
    this.s.getImage(file).subscribe(
      (result: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(result);
      }
    )

  }

  sendDataToParent(p: any) {
    this.msg.emit(p)
  }


}
