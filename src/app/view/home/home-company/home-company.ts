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
    // loop: true,
    rtl: true,
    dots: true,
    // nav: false,
    margin: 20,
    autoplay: false,

    responsive: {
      0: {
        items: 1
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
      id:1,
      icon: '/img/76MLaWl6urHaSbsQP2aKUY3D6vicOLVp6oEeYKeL.png',
      qty: '  5 محصول ',
      title: 'آکوگیم (آکوسپر پارسیان)',

    }, {
      id:2,
      icon: '/img/2O2QEYg8op3NpAib9GaEsIh4mpJbz9bOcu64IJcD.png',
      qty: '  2 محصول ',
      title: 'رهبران اندیشه غدیر',

    }, {
      id:3,
      icon: '/img/UdyE8rBflnR1oepVtRnUJ8PzT7UhNyYx3Nw8IOg6.png',
      qty: '  23محصول ',
      title: 'دبستانی ها دنیای مجازی بچه ها',

    },
    {
      id:4,
      icon: '/img/m6rddZ8ZNGGZVDBkjsFpfwUNYcVeZRDq2TXrVm1L.jpg',
      qty: '  9 محصول ',
      title: 'موسسه فرهنگی تربیت اقتصادی حکیم (مفتاح)',
    },
    {
      id:5,
      icon: '/img/wrObxL8nT3yoAjSD3LIN6JgbznQaKbo2YBP2fm5c.png',
      qty: '  1 محصول ',
      title: 'حجره مجازی اسپادانا',
    },
    {
      id:6,
      icon: '/img/9xVaoe7c22z4YsunGEe3mZfqwz6Bfa29T3IonB5N.png',
      qty: '  8 محصول ',
      title: 'آوای نشاط و ضربان زندگی',
    },
    {
      id:7,
      icon: '/img/n5H5V58ujlo28B4kx2StSqxHC5BDAFl0JGZNBKgc.png',
      qty: '  1 محصول ',
      title: 'اندیشسرای بین المللی تزکیه وتعلیم ',
    },
    {
      id:8,
      icon: '/img/otabetrtxOk9u829BkFo0utj9nH9N1daFxMDp4sS.jpg',
      qty: '  بدونمحصول ',
      title: 'استودیو انیمشن بچه های  ',
    },
  ];
}
