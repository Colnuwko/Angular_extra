import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-module',
  standalone: true,
  imports: [],
  templateUrl: './product-card-module.component.html',
  styleUrl: './product-card-module.component.css'
})
export class ProductCardModuleComponent {
  @Input() moduleName!: string;
  @Input() moduleNameLink!: string;
  handleClick() {
    alert('Кнопка была нажата!');
  }
}
