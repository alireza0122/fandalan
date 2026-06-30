import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductSliderComponent } from '../../shared/shared-slider/shared-slider';
@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [ProductSliderComponent],
  templateUrl: './home-products.html',
  styleUrl: './home-products.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeProducts {
  protected readonly Component = Component;


  courses = [
    {
      id: 1,
      title: 'دوره مشاوره گروهی',
      category: 'همراهان نوین نوجوان',
      image: '/img/Vj3IQI8CHGgwRW1uREMb1HRa1qI5xNQXz9uH3kge_thumb.png'
    },
    {
      id: 2,
      title: 'اپلیکیشن قطار قرآنی I آموزش مفاهیم قرآن ویژه کودکان با بازی',
      category: 'دبستانی ها دنیای مجازی بچه ها',
      image: '/img/E1lJzkROtkxTtMKuKQw3L7jM91CFWpUAZEs9BnmK_thumb.png'
    },
    {
      id: 3,
      title: 'جزوه خواستگاری پلاس',
      category: 'یارا',
      image: '/img/OTzShCKfzmEZyv5sUlqOkolBRNn4yvcsQ0clNirf_thumb.png'
    },
    {
      id: 4,
      title: 'همراهان نوین نوجوان',
      category: '🍂 دوره علمی-کاربردی تربیت جامع فرزندان 🍂',
      image: '/img/l5r5fA1WcVGSKO5ziHaJRnjcO1OYMlPTLyD2sLba_thumb.png'
    } ,
    {
      id: 5,
      title: 'مدیاپ (رسانه دانش نورا)',
      category: 'طراحی رویداد خلاق فرهنگی هنری',
      image: '/img/MhM5jmltexiNnlGzaFGvAbwVoiyoGGhhX9iTMYXu_thumb.png'
    } ,
    {
      id: 6,
      title: 'دوره آموزشی آشنایی با کشورهای عربی',
      category: 'دوره جامع عربی فصیح',
      image: '/img/xCGuWFWUaLffUYIo1zBWWcJmWe0EMtIcRsUbpUIB_thumb.png'
    },
    {
      id: 7,
      title: 'آوای نشاط و ضربان زندگی',
      category: 'بازی‌وارسازی (گیمیفیکیشن) فرآیندهای فرهنگی و آموزشی',
      image: '/img/kPxeybSI6tcNKTmpkPKC3dZE49WKwm6gAWpiRNyx_thumb.png'
    },
    {
      id: 8,
      title: 'پویشگران عصر داده',
      category: 'ایران وبینار (سامانه مدیریت کلاس های آنلاین در سرورهای بیگ بلو باتون)',
      image: '/img/zh9ViH0wUZhISWtx1oZvdolew5OigGdAYQdqVeEW_thumb.png'
    },

  ];



}
