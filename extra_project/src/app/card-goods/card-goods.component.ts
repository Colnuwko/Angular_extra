import { Component, Input } from '@angular/core';
import { PrCardInt } from '../interfaces';

@Component({
  selector: 'app-card-goods',
  standalone: true,
  imports: [],
  templateUrl: './card-goods.component.html',
  styleUrl: './card-goods.component.css'
})
export class CardGoodsComponent {
  @Input() card!: PrCardInt;
  handleClick() {
    alert('Кнопка была нажата!');
  }

}
