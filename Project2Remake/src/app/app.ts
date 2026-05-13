import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  protected readonly title = signal('Project2Remake');
}
