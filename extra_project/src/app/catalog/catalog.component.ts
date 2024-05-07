import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CategoryComponent} from "./category/category.component";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink, CategoryComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

}
