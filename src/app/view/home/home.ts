import { Component } from '@angular/core';
import { HomeBanner } from './home-banner/home-banner';
import { HomeProducts } from './home-products/home-products';
import { SharedBox } from '../shared/shared-box/shared-box';
import { HomeCompany } from './home-company/home-company';
import { HomePackages } from './home-packages/home-packages';
import { HomeTablig } from './home-tablig/home-tablig';
import { HomeCsv } from './home-csv/home-csv';
import { HomeCompanies } from './home-companies/home-companies';
import { HomeCustomers } from './home-customers/home-customers';

@Component({
  selector: 'app-home',
  imports: [
    HomeBanner,
    HomeProducts,
    SharedBox,
    HomeCompany,
    HomePackages,
    HomeTablig,
    HomeCsv,
    HomeCompanies,
    HomeCustomers
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
