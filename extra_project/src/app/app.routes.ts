import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'content/:componentName', component: AllProductsComponent },

];
