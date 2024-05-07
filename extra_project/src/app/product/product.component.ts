import { Component, Inject, Input, OnInit } from '@angular/core';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductSimilarComponent } from './product-similar/product-similar.component';
import { PrCardInt } from '../interfaces';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../services/service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductImgComponent, ProductInfoComponent, ProductSimilarComponent, CommonModule, RouterLink],
  providers: [ServiceService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  card: PrCardInt[] = []
  @Input() product_id!: number
  constructor(private router: Router, private productService: ServiceService){ }

  ngOnInit(): void {
    this.product_id = 1 // пока хард код для теста
    this.productService.getCardsByNumber([this.product_id]).subscribe(
      (data: PrCardInt[]) => {
        this.card = data;
      },
      (error) => {
        console.error('Error fetching cards:', error);
      }
    );
  }
}
