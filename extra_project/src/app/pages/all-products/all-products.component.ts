import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { componentMapping } from '../../interfaces';

import { ProductListComponent } from '../../product-list/product-list.component';
import { FilterComponent } from '../../filter/filter.component';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [FilterComponent, ProductListComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  componentName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const componentName = params.get('componentName');
      if (componentName !== null) {
        this.componentName = this.getComponentName(componentName);
      } else {
        // Обработка случаев, когда параметр 'componentName' равен null
      }
    });
  }
  getComponentName(url: string): string {
    const names = Object.keys(componentMapping);
    for (const name of names) {
      if (componentMapping[name] === url) {
        return name;
      }
    }
    return ''; // Если соответствие не найдено
  }
}
