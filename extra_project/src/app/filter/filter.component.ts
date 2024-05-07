import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {


  categories = ['Фрукты', 'Молочные продукты', 'Хлебобулочные изделия'];

  minPrice: number = 0;
  maxPrice: number = 1000;
  selectedCategory!: string;
  inStock: boolean = false;


  clearFilters() {
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.selectedCategory = '';
    this.inStock = false;
  }

  OnClick() {
    alert();
  }


}
