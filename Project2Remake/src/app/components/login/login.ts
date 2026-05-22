import { Component, ChangeDetectorRef } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { AvtorizaciaService } from "../../services/avtorizacia.service";


@Component({
  selector: "app-login",
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login { 
  
  loginForm = new FormGroup({
    PhoneNumber: new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$")]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
    
  });
  

  constructor(public avtorizaciaService: AvtorizaciaService, private cdr: ChangeDetectorRef) {}
   handlelogin(event : Event) : void {
    event.preventDefault();

    if (this.loginForm.valid) {
      this.avtorizaciaService.login(this.loginForm.value).subscribe((response: any) => {
        localStorage.setItem("token", response.token);
        window.location.href = "/";
        this.cdr.detectChanges();
      });
    }
    let phone = this.loginForm.get("PhoneNumber")?.value ?? "";
    localStorage.setItem("Phone", phone);
   }
  
}
