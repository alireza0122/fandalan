import { Component,input , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-shared-slider',
  imports: [],
  standalone: true,
  templateUrl: './shared-slider.html',
  styleUrl: './shared-slider.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProductSliderComponent {

  title = input<string>();

  products = input<any[]>([]);
}
