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
}
