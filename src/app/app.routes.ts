import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Products } from './view/products/products';

export const routes: Routes = [
  {
    path : '',
    component : Home
  },
  {
    path : 'products',
    component : Products
  },
];
