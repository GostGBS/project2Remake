import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AvtorizaciaService {
  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post(`https://rentcar.stepprojects.ge/api/Users/register`, userData);
  }

  login(yes : any) {
    return this.http.post(`https://rentcar.stepprojects.ge/api/Users/login`, yes);
  }

}
