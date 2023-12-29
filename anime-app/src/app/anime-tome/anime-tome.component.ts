import { Component, Input } from '@angular/core';
import { AnimeTome } from '../anime-tome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime-tome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-tome.component.html',
  styleUrl: './anime-tome.component.css'
})
export class AnimeTomeComponent {
  
  @Input() anime!:AnimeTome;
}
