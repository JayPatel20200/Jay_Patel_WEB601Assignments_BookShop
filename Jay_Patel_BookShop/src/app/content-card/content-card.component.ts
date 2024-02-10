import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';                 
import { UnderLineDirective } from '../under-line.directive';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, UnderLineDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
 @Input() contentItem : any;
}
