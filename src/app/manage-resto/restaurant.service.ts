import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

  getRestaurant() {
    return this.http.get("http://localhost:8090/restaurants")
  }

  fetchRestaurantById(id: any) {
    return this.http.get("http://localhost:8090/restaurants/" + id)
  }

  removeRestaurant(id: any) {
    return this.http.delete("http://localhost:8090/restaurants/" + id)
  }

  addRestaurant(data: any) {
    return this.http.post("http://localhost:8090/restaurants", data);
  }


  updateRestaurant(id:any,data: any) {
    return this.http.put("http://localhost:8090/restaurants/"+id , data)
  }

  //****************IMAGE***********************

  uploadImage(id:any,data:any){
    return this.http.post("http://localhost:8090/restaurants/uploadImage/" + id,data)

  }
  // @GetMapping("/getImage/{fileName:.+}")
  getImage(fileName:any){
    return this.http.get("http://localhost:8090/restaurants/getImage/" + fileName, { responseType: 'blob' })

  }
  //****************QRCODE***********************

getqrCode(id:any){
  return this.http.get("http://localhost:8090/restaurants/qrCode/" + id ,{ responseType: 'blob' })

}

}
