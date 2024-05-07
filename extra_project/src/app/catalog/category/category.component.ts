import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { componentMapping } from '../../interfaces';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [ServiceService]
})
export class CategoryComponent {
  @Input() imageSrc!: string;
  @Input() categoryWidth!: number;
  @Input() categoryText!: string;
  @Input() routePath!: string;

  constructor(private router: Router, private productService: ServiceService) { }
  navigateToComponent(): void {
    const componentName = componentMapping[this.routePath];
    if (componentName) {
      this.router.navigate(['/content', componentName]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
