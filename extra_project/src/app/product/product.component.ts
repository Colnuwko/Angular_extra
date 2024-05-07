import { Component, Inject, Input, OnInit } from '@angular/core';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductSimilarComponent } from './product-similar/product-similar.component';
import { PrCardInt } from '../interfaces';
import { CommonModule, NgIf } from '@angular/common';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductCardModuleComponent } from '../product-card-module/product-card-module.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductImgComponent, ProductInfoComponent, ProductSimilarComponent, CommonModule, RouterLink, NgIf, ProductCardModuleComponent],
  providers: [ServiceService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  cardsNumberDiscounts: number[] = [2, 4, 3, 1];
  card!: PrCardInt[];
  constructor(private router: Router, private productService: ServiceService, private route: ActivatedRoute) { }
  product_id!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const componentId = params.get('goodsId');
      if (componentId !== null) {
        this.product_id = parseInt(componentId);
      } else {
        // Обработка случаев, когда параметр 'componentName' равен null
      }
      this.fetchData();
    });
  }

  fetchData() {
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
