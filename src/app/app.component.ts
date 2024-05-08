import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import { HomeComponent } from '../components/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HelloComponent , HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})

export class AppComponent {
  title = 'pd09202 - Tran Van Y';  
  ingredientsList = [
    {name : 'tran van y' , address : "Quang Nam"},
    {name : 'Ho anh Tuyet' , address : "Thanh Hoa"},
    {name : 'Cam Tu Quynh' , address : "An giang"},
  ]

  save() {
    this.title = this.title.toUpperCase();
  }
}
