import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-customers',
  imports: [
    CarouselModule
  ],
  templateUrl: './home-customers.html',
  styleUrl: './home-customers.scss',
})
export class HomeCustomers {

  customOptions: OwlOptions = {
    // loop: true,
    rtl: true,
    dots: true,
    // nav: false,
    margin: 17,
    autoplay: false,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      500: {
        items: 3
      },
      800: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  };
}
