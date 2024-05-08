import {Component, Input, OnInit} from '@angular/core';
import { PrCardInt} from '../interfaces';
import { Router, RouterLink } from '@angular/router';
import { BasketService } from "../services/basket.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-card-goods',
  standalone: true,
  imports: [RouterLink, NgIf,],
  templateUrl: './card-goods.component.html',
  styleUrl: './card-goods.component.css'
})
export class CardGoodsComponent implements OnInit{
  @Input() card!: PrCardInt;

  priceWithSale: number= 0;
  ngOnInit() {
    this.priceWithSale = this.basketService.getPriceWithSaleForCard(this.card);
  }

  constructor(private router: Router, private basketService: BasketService) { }
  navigateToComponent(): void {
    this.router.navigate(['/goods', this.card.id]);
  }
  handleClick() {
    this.basketService.addToBusket(this.card);
  }

}
