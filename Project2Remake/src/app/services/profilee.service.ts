import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProfileeService {
  constructor(private http: HttpClient) { }

  profileinfo() {
    
    return this.http.get(`https://rentcar.stepprojects.ge/api/Users/${localStorage.getItem("Phone")}`);
  }


  purchaseHistory() {
    return this.http.get(`https://rentcar.stepprojects.ge/Purchase/${localStorage.getItem("Phone")}`);
  }

  FavCarts() {
    return this.http.get(`https://rentcar.stepprojects.ge/api/Users/${localStorage.getItem("Phone")}/favorite-cars`)
  };

  
  
}
