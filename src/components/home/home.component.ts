import { Component } from '@angular/core';
import { HousingLocationComponent } from '../../app/housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../app/housing-location';
import { CarouselComponent } from '../../app/carousel/carousel.component';
import { CardComponent } from '../../app/card/card.component';
import { Card } from '../../app/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , HousingLocationComponent , CarouselComponent , CardComponent],
  template: `
   <section>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </section>
   <app-carousel></app-carousel>
    <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class='result d-flex align-items-baseline justify-content-between'>
       <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
       <app-card [card]="card"></app-card>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://th.bing.com/th/id/OIP.1o2dcOZkgYSa5yFeYsLN7AHaHD?w=188&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7';
  housingLocation : HousingLocation = {
    id: 9999, 
    name :'text home',
    city :'Quang Nam',
    state:'ST',
    photo : `${this.baseUrl}`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
  card : Card = {
    id : 1, 
    img: `${this.baseUrl}`,
    title:' Hello cat',
    content : 'practice code interface card', 
    text : 'card'
  }
}
