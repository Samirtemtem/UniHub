import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.scss']
})
export class ShowOneComponent {
  imageUrl: string | ArrayBuffer | null;

  @Input() dataIn: any;
  @Output() msg = new EventEmitter();

  constructor(private s: RestaurantService) {
  }
  ngOnInit(): void {
    this.getImage(this.dataIn.imageUrl);
    console.log("data in showOne : ", this.dataIn)
  }
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
