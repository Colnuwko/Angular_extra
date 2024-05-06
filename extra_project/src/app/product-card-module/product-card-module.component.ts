import { Component, Input } from '@angular/core';
import { PrCardInt } from '../interfaces';
import { ProductComponent } from '../card/product/product.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-card-module',
  standalone: true,
  imports: [ProductComponent, NgFor],
  templateUrl: './product-card-module.component.html',
  styleUrl: './product-card-module.component.css'
})
export class ProductCardModuleComponent {
  @Input() moduleName!: string;
  @Input() moduleNameLink!: string;
  handleClick() {
    alert('Кнопка была нажата!');
  }

  cards: PrCardInt[] = [
    { img: "assets/bl.png", discount: 0, name: "Молоко", price: 100 },
    { img: "assets/bl.png", discount: 0, name: "Молоко", price: 200 },
    { img: "assets/bl.png", discount: 0, name: "Молоко", price: 200 },
    { img: "assets/bl.png", discount: 0, name: "Молоко", price: 300 },
  ]


}
