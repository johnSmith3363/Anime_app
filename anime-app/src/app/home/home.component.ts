import { Component } from '@angular/core';
import { AnimeTomeComponent } from '../anime-tome/anime-tome.component';
import { AnimeTome } from '../anime-tome';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimeTomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  animeTomeList:AnimeTome[]=
  [
    {
      id:1,
      image:"/assets/_Ron/1.png"
    },
    {
      id:2,
      image:"/assets/_Ron/2.jpg",
    },
    {
      id:3,
      image:"/assets/_Ron/4.jpg"
    },
    {
      id:5,
      image:"/assets/_Ron/5.png"
    },
    {
      id:6,
      image:"/assets/_Ron/6.png"
    },
    {
      id:7,
      image:"/assets/_Ron/7.jpg"
    },
    {
      id:9,
      image:"/assets/_Ron/9.jpg"
    },
    {
      id:10,
      image:"/assets/_Ron/10.jpg"
    },
    {
      id:11,
      image:"/assets/_Ron/11.jpg"
    },
    {
      id:12,
      image:"/assets/_Ron/12.jpg"
    },
    {
      id:13,
      image:"/assets/_Ron/13.png"
    }
  ];
}
