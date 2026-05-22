import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ProfileeService } from "../../services/profilee.service";



@Component({
  selector: "app-profile",
  imports: [RouterLink,],
  templateUrl: "./profile.html",
  styleUrl: "./profile.css",
})
export class Profile implements OnInit {

  purchaseHistory: any[] = [];
  constructor(private profileeService: ProfileeService, private cdr: ChangeDetectorRef) {}

  handleLogout(): void {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  get token(): string | null {
    return localStorage.getItem("token");

  }
  

  ngOnInit(): void {
   var  _this_ = this;
    this.profileeService.profileinfo().subscribe((response: any) => {
      
      const emailElement = document.getElementById("dashEmail");
      const phoneElement = document.getElementById("dashPhone");

    
    if (emailElement) {
      emailElement.textContent = response.email;
    }
    if (phoneElement) {
      phoneElement.textContent = response.phoneNumber;
    }

    this.profileeService.purchaseHistory().subscribe((historyResponse: any) => {
      console.log(historyResponse);
      _this_.purchaseHistory = historyResponse;
      _this_.cdr.detectChanges();
    });
  });

  }
}
