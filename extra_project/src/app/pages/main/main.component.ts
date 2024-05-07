import { Component } from '@angular/core';
import { ProductCardModuleComponent } from '../../product-card-module/product-card-module.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductCardModuleComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
