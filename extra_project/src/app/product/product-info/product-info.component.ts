import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { PrCardInt } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {
  @Input() card!: PrCardInt

  constructor(private route: ActivatedRoute, private productService: ServiceService, private basketService: BasketService) { }

  handleClick() {
    this.basketService.addToBusket(this.card);
  }
  priceWithSale: number = 0;
  ngOnInit() {
    this.priceWithSale = this.basketService.getPriceWithSaleForCard(this.card);
  }
}
