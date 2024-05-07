import {Component, Input, OnInit} from '@angular/core';
import {PrCardInt} from "../../../interfaces";
import {BasketService} from "../../../services/basket.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  constructor(private basketService: BasketService) { }
  @Input() card!: PrCardInt;
  count = 1;
ngOnInit(): void {
    this.count = this.basketService.getCount(this.card);
  }


    Delete() {
      console.log(123);
      this.basketService.removeData(this.card);
  }
  increment(){

      this.basketService.increment(this.card);
      this.count = this.basketService.getCount(this.card);
  }
  decrement(){
      if(this.count != 1){

      this.basketService.decrement(this.card);}
      this.count = this.basketService.getCount(this.card);
  }

}
