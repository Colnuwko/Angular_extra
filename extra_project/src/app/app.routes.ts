import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import {BasketComponent} from "./pages/basket/basket.component";
import {CatalogComponent} from "./catalog/catalog.component";

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'content/:componentName', component: AllProductsComponent },
    {path: 'basket', component:BasketComponent},
  {path: 'catalog', component: CatalogComponent}

];
