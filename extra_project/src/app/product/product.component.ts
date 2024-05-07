import { Component, Inject, Input, OnInit } from '@angular/core';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductSimilarComponent } from './product-similar/product-similar.component';
import { PrCardInt } from '../interfaces';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductImgComponent, ProductInfoComponent, ProductSimilarComponent, CommonModule, RouterLink],
  providers: [ServiceService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  card: PrCardInt[] = []
  constructor(private router: Router, private productService: ServiceService, private route: ActivatedRoute) { }
  product_id!: number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product_id = params['myId'];
      console.log(this.product_id); // Здесь вы можете использовать переданные данные
    });
    this.product_id = 3
    this.productService.getCardsByNumber([this.product_id]).subscribe(
      (data: PrCardInt[]) => {
        this.card = data;
        console.log(this.card)
      },
      (error) => {
        console.error('Error fetching cards:', error);
      }
    );
  }
}
