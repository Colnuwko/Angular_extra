import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { PrCardInt } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
  @Input() product_id!: number
  card!: PrCardInt[]
  constructor(private route: ActivatedRoute, private productService: ServiceService) { }
  ngOnInit(): void {
    this.productService.getCardsByNumber([this.product_id]).subscribe(
      (data: PrCardInt[]) => {
        this.card = data;
      },
      (error) => {
        console.error('Error fetching cards:', error);
      }
    );
  }
}
