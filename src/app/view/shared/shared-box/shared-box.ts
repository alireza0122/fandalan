import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shared-box',
  imports: [],
  templateUrl: './shared-box.html',
  styleUrl: './shared-box.scss',
})
export class SharedBox {
  subtitle = input<String>();
  title = input<String>();
}
