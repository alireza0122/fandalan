import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-packages',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home-packages.html',
  styleUrl: './home-packages.scss'
})
export class HomePackages {

  customOptions: OwlOptions = {
    loop: true,
    // nav: true,
    dots: true,
    items: 3,
    rtl: true,
    margin: 35,
    responsive: {
      0: {
        items: 1,

      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  };

  slides = [
      {
        id: 1,
        icon: '/img/box-1.svg',
        qty: 'شامل 15 مورد',
        title: 'سازمان پیشرو؛ خانواده توانمند',
        urlImg: '/img/qvEFvF6SPRkdbQJSWLIbpLCVBhFXGhmOdjyHJ73p_thumb.png'
      },
      {},
      {}

  ];
}
