import { Component } from '@angular/core';
import { ProductSliderComponent } from '../../shared/shared-slider/shared-slider';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-company',
  imports: [
    ProductSliderComponent,
    CarouselModule
  ],
  templateUrl: './home-company.html',
  styleUrl: './home-company.scss',
})
export class HomeCompany {
  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: true,
    items: 4,
    rtl: true,
    margin: 25
  };

  slides = [
    {
      id:1,
      icon: '/img/box-1.svg',
      qty: ' شامل 15 مورد ',
      title: 'سازمان پیشرو؛ خانواده توانمند | ارتقای کیفیت زندگی کارکنان و خانوادهٔ آن‌ها',
      urlImg: '/img/qvEFvF6SPRkdbQJSWLIbpLCVBhFXGhmOdjyHJ73p_thumb.png'
    }, {
      id:2,
      icon: '/img/box-1.svg',
      qty: ' شامل 15 مورد ',
      title: 'سازمان پیشرو؛ خانواده توانمند | ارتقای کیفیت زندگی کارکنان و خانوادهٔ آن‌ها',
      urlImg: '/img/qvEFvF6SPRkdbQJSWLIbpLCVBhFXGhmOdjyHJ73p_thumb.png'
    }, {
      id:3,
      icon: '/img/box-1.svg',
      qty: ' شامل 15 مورد ',
      title: 'سازمان پیشرو؛ خانواده توانمند | ارتقای کیفیت زندگی کارکنان و خانوادهٔ آن‌ها',
      urlImg: '/img/qvEFvF6SPRkdbQJSWLIbpLCVBhFXGhmOdjyHJ73p_thumb.png'
    },
    {
      id:4,
      icon: '/img/box-1.svg',
      qty: ' شامل 15 مورد ',
      title: 'سازمان پیشرو؛ خانواده توانمند | ارتقای کیفیت زندگی کارکنان و خانوادهٔ آن‌ها',
      urlImg: '/img/qvEFvF6SPRkdbQJSWLIbpLCVBhFXGhmOdjyHJ73p_thumb.png'
    }
  ];
}
