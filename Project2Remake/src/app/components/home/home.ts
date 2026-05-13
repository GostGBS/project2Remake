import { Component, OnInit,  } from '@angular/core';
import { CarService } from '../../services/car.service';
import { RouterLink } from "@angular/router";
import { FilterService } from '../../services/filter.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ReactiveFormsModule, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  cars: any[] = [];
  popularCars: any[] = [];
  filters: any[] = [];

  constructor(public carService: CarService, public filterService: FilterService) { }

  ngOnInit(): void {
    var _this = this;
    this.carService.Getcars().subscribe(function(response: any) {
      _this.cars = response;
    });

    this.carService.popularCars().subscribe(function(response: any) {
      _this.popularCars = response;
    });

    this.filterService.getFilters().subscribe(function(response: any) {
      _this.filters = response;
    });

  }

}
