
import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PrCardInt} from "../../interfaces";



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  // cards: PrCard[] = [new PrCard("msdvkmv","msdvkmv","msdvkmv","msdvkmv",), new PrCard("msdvkmv","msdvkmv","msdvkmv","msdvkmv",), new PrCard("msdvkmv","msdvkmv","msdvkmv","msdvkmv",)];
  @Input() card!: PrCardInt;
  handleClick() {
    alert('Кнопка была нажата!');
  }

}
