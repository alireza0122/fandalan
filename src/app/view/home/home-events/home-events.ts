import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-events',
  imports: [
    CarouselModule
  ],
  templateUrl: './home-events.html',
  styleUrl: './home-events.scss',
})

export class HomeEvents {

  slides = [
    {
      id: 1,
      title: 'رویداد ایده پردازی هم سرنوشت',
      urlImg: '/img/mvBTmDqZ73gxnzboDmB5cQ9K2PCRHYmE5IGMcY36_.png',
      icon: '/img/Group198992.svg',
      icononetitle: 'خانه فناوری های فرهنگی – اصفهان',
    },
    {},
    {}
  ];

}
