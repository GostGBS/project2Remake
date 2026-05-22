import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) { }

  Getcars() {
    return this.http.get('https://rentcar.stepprojects.ge/api/Car');
  }

  popularCars() {
    return this.http.get('https://rentcar.stepprojects.ge/api/Car/popular');
  }

  PurchaseCar() {
    const carId = localStorage.getItem("carId");
    return this.http.post(`https://rentcar.stepprojects.ge/Purchase/purchase?phoneNumber=${localStorage.getItem("Phone")}&carId=${carId}&multiplier=1`
    , {});  
    
  }

  

  
}
