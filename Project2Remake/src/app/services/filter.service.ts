import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private http: HttpClient) { }


  getFilters() {
    return this.http.get('https://rentcar.stepprojects.ge/api/Car/filter?pageIndex=1&pageSize=10');
  }
}
