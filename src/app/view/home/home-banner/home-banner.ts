import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  imports: [],
  templateUrl: './home-banner.html',
  styleUrl: './home-banner.scss',
})
export class HomeBanner {
  data:{id:number,title:string}[]=[
    {id:1,title:'asdf'}
  ]
}
