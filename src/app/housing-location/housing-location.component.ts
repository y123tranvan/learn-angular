import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { Input } from '@angular/core';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <div class="card" style="width: 18rem;">
  <img [src]="housingLocation.photo" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{housingLocation.name}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
 @Input() housingLocation!: HousingLocation;
}
