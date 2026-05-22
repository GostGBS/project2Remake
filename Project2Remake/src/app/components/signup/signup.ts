import { Component, ChangeDetectorRef } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { AvtorizaciaService } from "../../services/avtorizacia.service";

@Component({
  selector: "app-signup",
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: "./signup.html",
  styleUrls: ["./signup.css"],
})
export class Signup {
  signupForm = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    PhoneNumber: new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$")]),
    role: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  constructor(public avtorizaciaService: AvtorizaciaService, private cdr: ChangeDetectorRef) {}

  handlesignup(event: Event): void {
    event.preventDefault();

    if (this.signupForm.valid) {
      this.avtorizaciaService.register(this.signupForm.value).subscribe((response: any) => {
        window.location.href = "/login";
        this.cdr.detectChanges();
      });
    }
  }
}
 


  



