import { Component, Input } from '@angular/core';
import { PrCardInt, componentMapping } from '../interfaces';
import { ServiceService } from '../services/service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-goods',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './card-goods.component.html',
  styleUrl: './card-goods.component.css'
})
export class CardGoodsComponent {
  @Input() card!: PrCardInt;

  handleClick() {
    alert();
  }
  constructor(private router: Router, private productService: ServiceService) { }
  navigateToComponent(): void {



    this.router.navigate(['/goods', this.card.id]);

  }

}
