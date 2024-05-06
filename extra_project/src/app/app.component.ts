import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from "./card/product/product.component";
import { PrCardInt } from "./interfeces";
import { ProductCardModuleComponent } from './product-card-module/product-card-module.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterLink, ProductComponent, ProductCardModuleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'extra_project';
  card: PrCardInt = { image: "sf,dfsdf", sale: "sf,dfsdf", name: "sf,dfsdf", price: "sf,dfsdf" };
}
