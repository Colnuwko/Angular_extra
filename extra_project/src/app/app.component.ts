import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductCardModuleComponent } from './product-card-module/product-card-module.component';
import { PrCardInt } from './interfaces';
import { MainComponent } from './pages/main/main.component';
import { CommonModule } from '@angular/common';
import { ServiceService } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';



import {BasketService} from "./services/basket.service";



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavbarComponent, RouterLink, MainComponent, CommonModule, RouterLinkActive, RouterModule, HttpClientModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [BasketService]

})
export class AppComponent {
  title = 'extra_project';


}

