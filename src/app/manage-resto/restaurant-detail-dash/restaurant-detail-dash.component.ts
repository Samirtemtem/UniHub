import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-restaurant-detail-dash',
  templateUrl: './restaurant-detail-dash.component.html',
  styleUrls: ['./restaurant-detail-dash.component.scss']
})
export class RestaurantDetailDashComponent {
    constructor(private activatedroute: ActivatedRoute, private s: RestaurantService) {
    }
  imageUrl: string | ArrayBuffer | null;
    id: any;
    element_data: any;
  getImage(file: any) {
    this.s.getImage(file).subscribe(
      (result: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(result);
        return this.imageUrl;
      }
    )

  }
    ngOnInit(): void {
        this.id = this.activatedroute.snapshot.params['id'];
        this.s.fetchRestaurantById(this.id).subscribe(
            (result) => {
                this.element_data = result
                this.getImage(this.element_data.imageUrl)
            }
        )

    }

}
