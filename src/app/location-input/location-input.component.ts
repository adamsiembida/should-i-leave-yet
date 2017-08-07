import { Component, Input, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent implements AfterViewInit {
  @Input() htmlId: string;
  @Input() placeholderText: string;

  constructor() { }

  ngAfterViewInit() {
    this.initAutocomplete();
  }

  initAutocomplete(): void {
    // Create the autocomplete object, restricting the search to geographical location types.
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById(this.htmlId));

    // When the user selects an address from the dropdown, populate the address fields in the form.
    autocomplete.addListener('place_changed', this.placeChanged);
  }

  placeChanged() {
    alert('place changed');
  }

}
