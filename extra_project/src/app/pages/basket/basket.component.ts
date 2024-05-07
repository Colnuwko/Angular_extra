import { Component } from '@angular/core';
import {CardComponent} from "./card/card.component";
import {PrCardInt} from "../../interfaces";
import  {BasketService} from "../../services/basket.service";
import {NgForOf} from "@angular/common";

import {Subscription} from "rxjs";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CardComponent, NgForOf],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {

  cards: PrCardInt[] = [];
  itog: number = 0;
  bonuses: number = 200;
  count: number = 0;
  summ: number = 0;
  discount: number = 0;
 private subscription: Subscription | undefined;
  constructor(private basketService: BasketService) { }
  ngOnInit() {
    this.subscription = this.basketService.getAllBusket().subscribe(  (data: PrCardInt[]) => {
      this.cards = data;
      this.count = this.cards.length;
      this.summ = this.basketService.getPriceWithoutSale();
      this.discount = this.basketService.getPriceWithSale();
      this.itog = this.summ - this.discount;
      console.log(this.cards);
  });


  }


}
