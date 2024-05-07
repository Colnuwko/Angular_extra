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
  products = [
    { name: 'Яблоко', price: 50, category: 'Фрукты', inStock: true },
    { name: 'Молоко', price: 80, category: 'Молочные продукты', inStock: true },
    { name: 'Хлеб', price: 30, category: 'Хлебобулочные изделия', inStock: false },
    // Добавьте больше продуктов по аналогии
  ];

  categories = ['Фрукты', 'Молочные продукты', 'Хлебобулочные изделия'];

  minPrice!: number;
  maxPrice!: number;
  selectedCategory!: string;
  inStock!: boolean;

  clearFilters() {
    this.minPrice = 1000;
    this.maxPrice = 0;
    this.selectedCategory = '';
    this.inStock = false;
  }
  get filteredProducts() {
    return this.products.filter(product => {
      if ((this.minPrice && product.price < this.minPrice) ||
        (this.maxPrice && product.price > this.maxPrice) ||
        (this.selectedCategory && product.category !== this.selectedCategory) ||
        (this.inStock && !product.inStock)) {
        return false;
      }
      return true;
    });
  }
}
