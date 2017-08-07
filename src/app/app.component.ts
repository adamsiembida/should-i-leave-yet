import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  origin = { longitude: 4.333, latitude: -1.2222 }; // its a example aleatory position
  destination = { longitude: 22.311, latitude: -0.123 }; // its a example aleatory positio
}
