import { Component,input , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shared-slider',
  imports: [
    CarouselModule
  ],
  standalone: true,
  templateUrl: './shared-slider.html',
  styleUrl: './shared-slider.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProductSliderComponent {
  customOptions: OwlOptions = {

    loop: false ,
    // nav: true,
    dots: false,
    rtl: true,
    margin: 25,
    responsive: {
      0: {
        items: 1.2
      },
      576: {
        items: 2.2
      },
      768: {
        items: 3.2
      },
      992: {
        items: 4.2
      }
    }
  };
  title = input<string>();

  products = input<any[]>([]);
}
