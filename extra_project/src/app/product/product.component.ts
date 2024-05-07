import { Component, Inject } from '@angular/core';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductSimilarComponent } from './product-similar/product-similar.component';
import { PrCardInt } from '../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductImgComponent, ProductInfoComponent, ProductSimilarComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
