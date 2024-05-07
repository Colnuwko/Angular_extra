import { Component } from '@angular/core';
import { PrCardInt } from '../interfaces';
import { ServiceService } from '../services/service.service';
import { NgFor } from '@angular/common';
import { ProductCardModuleComponent } from '../product-card-module/product-card-module.component';
import { ProductComponent } from '../card/product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ServiceService]
})
export class ProductListComponent {
  cards: PrCardInt[] = [];
  page: number = 1;
  pageSize: number = 6;

  constructor(private productService: ServiceService) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.productService.getCardsPage(this.page, this.pageSize).subscribe(
      (data: PrCardInt[]) => {
        this.cards = data;
      },
      (error) => {
        console.error('Error fetching cards:', error);
      }
    );
  }

  loadMore() {
    this.page++;
    this.loadCards();
  }
}
