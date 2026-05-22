import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { CarService } from '../../services/car.service';
import { RouterLink } from "@angular/router";
import { FilterService } from '../../services/filter.service';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
  import { Footer } from '../footer/footer';

  @Component({
    selector: 'app-home',
    imports: [RouterLink, FormsModule, Header, CommonModule, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  
  
  cars: any[] = [];
  popularCars: any[] = [];
  filters: any[] = [];
  

  constructor(public carService: CarService, public filterService: FilterService, private cdr : ChangeDetectorRef) { }

  ngOnInit(): void {
    var _this = this;
    this.carService.Getcars().subscribe(function(response: any) {
      _this.cars = response;
      _this.cdr.detectChanges();
      localStorage.setItem("carId", _this.cars[0].id);
    });

    this.carService.popularCars().subscribe(function(response: any) {
      _this.popularCars = response;
      _this.cdr.detectChanges();
    });

    this.filterService.getFilters().subscribe(function(response: any) {
      _this.filters = response;
      _this.cdr.detectChanges();
    });

    this.carService.PurchaseCar().subscribe(function(response: any) {
      _this.cdr.detectChanges();
      
    });
  }

  filter(form : any) {
    var _this = this;

    this.filterService.filterCars(form).subscribe(function(response : any) {
      _this.cars = response.data;
      _this.cdr.detectChanges();
    });
  };
  

}
