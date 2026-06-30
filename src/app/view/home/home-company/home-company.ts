import { Component } from '@angular/core';
import { ProductSliderComponent } from '../../shared/shared-slider/shared-slider';

@Component({
  selector: 'app-home-company',
  imports: [
    ProductSliderComponent
  ],
  templateUrl: './home-company.html',
  styleUrl: './home-company.scss',
})
export class HomeCompany {

  books = [
    {
      id: 1,
      title: 'کتاب موفقیت',
      category: 'کتاب',
      image: '/img/Vj3IQI8CHGgwRW1uREMb1HRa1qI5xNQXz9uH3kge_thumb.png'
    },

    {
      id: 2,
      title: 'کتاب موفقیت',
      category: 'کتاب',
      image: '/img/Vj3IQI8CHGgwRW1uREMb1HRa1qI5xNQXz9uH3kge_thumb.png'
    },

    {
      id: 3,
      title: 'کتاب موفقیت',
      category: 'کتاب',
      image: '/img/Vj3IQI8CHGgwRW1uREMb1HRa1qI5xNQXz9uH3kge_thumb.png'
    },

    {
      id: 4,
      title: 'کتاب موفقیت',
      category: 'کتاب',
      image: '/img/Vj3IQI8CHGgwRW1uREMb1HRa1qI5xNQXz9uH3kge_thumb.png'
    },

    {
      id: 5,
      title: 'کتاب موفقیت',
      category: 'کتاب',
      image: '/img/Vj3IQI8CHGgwRW1uREMb1HRa1qI5xNQXz9uH3kge_thumb.png'
    },




  ];

}
