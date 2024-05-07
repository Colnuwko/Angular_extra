import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { PrCardInt } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-img.component.html',
  styleUrl: './product-img.component.css'
})
export class ProductImgComponent {
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
