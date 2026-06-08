import { Component, OnInit } from "@angular/core";
import { CarService } from "../../services/car.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-mainpage",
  imports: [],
  templateUrl: "./mainpage.html",
  styleUrl: "./mainpage.css",
})
export class Mainpage implements OnInit {
  constructor(private carService: CarService, private http: HttpClient) {}

  car: any;

  ngOnInit() {
    const carId = localStorage.getItem("carId");
    this.carService.mainpage(carId).subscribe((response) => {
      this.car = response;
    });
}
}
