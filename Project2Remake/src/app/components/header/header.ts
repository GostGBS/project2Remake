import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AvtorizaciaService } from '../../services/avtorizacia.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { 
  
  constructor(public avtorizaciaService: AvtorizaciaService) {}
  
  get token(): string | null {
    return localStorage.getItem("token");
  }

  ngOnInit(): void {
    this.updateUIBasedOnToken();
  }

  private updateUIBasedOnToken(): void {
    const guestLinks = document.getElementById("guest-links");
    const userLinks = document.getElementById("user-links");

    if (this.token) {
      guestLinks?.classList.add("d-none");
      userLinks?.classList.remove("d-none");
    } else {
      guestLinks?.classList.remove("d-none");
      userLinks?.classList.add("d-none");
    }
  }

  handleLogout(): void {
    localStorage.removeItem("token");
    this.updateUIBasedOnToken();
    window.location.href = "/";
  }

  onProfileClick(): void {
      window.location.href = "/profile";
  }
  


}
