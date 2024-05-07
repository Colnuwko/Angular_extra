import { Component, Input } from '@angular/core';
import { PrCardInt, componentMapping } from '../interfaces';
import { ProductComponent } from '../card/product/product.component';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-product-card-module',
  standalone: true,
  imports: [ProductComponent, NgFor, RouterLink],
  templateUrl: './product-card-module.component.html',
  styleUrl: './product-card-module.component.css',
  providers: [ServiceService],
})
export class ProductCardModuleComponent {
  @Input() moduleName!: string;
  @Input() moduleNameLink!: string;
  @Input() cardsNumber!: number[];

  cards: PrCardInt[] = [];



  constructor(private router: Router, private productService: ServiceService) { }

  navigateToComponent(): void {
    const componentName = componentMapping[this.moduleName];
    if (componentName) {
      this.router.navigate(['/content', componentName]);
    } else {
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
    this.productService.getCardsByNumber(this.cardsNumber).subscribe(
      (data: PrCardInt[]) => {
        this.cards = data;
      },
      (error) => {
        console.error('Error fetching cards:', error);
      }
    );
  }
}