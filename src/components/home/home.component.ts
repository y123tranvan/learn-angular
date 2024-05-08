import { Component } from '@angular/core';
import { HousingLocationComponent } from '../../app/housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
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

}
