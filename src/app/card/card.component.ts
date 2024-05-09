import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from '../card';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card! : Card 
}
