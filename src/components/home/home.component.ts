import { Component } from '@angular/core';
import { HousingLocationComponent } from '../../app/housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../app/housing-location';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , HousingLocationComponent],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class='result'>
  <app-housing-location></app-housing-location>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'http://angular.io/assets/images/tutorials/faa';

  housingLocation : HousingLocation = {
    id: 9999 , 
    name : 'text home',
    city : 'Quang Nam',
    state : 'ST',
    photo : `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
