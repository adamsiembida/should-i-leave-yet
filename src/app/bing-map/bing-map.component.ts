import {AfterViewInit, Component, Renderer2} from '@angular/core';

declare var Microsoft: any;
declare var mapApiLoaded: any;

@Component({
  selector: 'app-bing-map',
  templateUrl: './bing-map.component.html',
  styleUrls: ['./bing-map.component.css']
})
export class BingMapComponent implements AfterViewInit {
  public directionsManager;
  public travelTimeMinutes: number = null;

  constructor(renderer: Renderer2) {
    renderer.listen('document', 'apiLoaded', (event) => {
      this.generateMap();
    });
  }

  ngAfterViewInit(): void {
    // Generate the map if API is already loaded. Otherwise, listen for event.
    if (mapApiLoaded === true) {
      this.generateMap();
    }
  }

  generateMap() {
    const map = new Microsoft.Maps.Map(document.getElementById('bingMap'), {
      credentials: 'AqN4AgKznjhDFoTX722rYmD05XvMvgzufcmcAFP5yYh1n__0y7DcNvQ9xmyBAVAm',
      center: new Microsoft.Maps.Location(47.606209, -122.332071),
      zoom: 12,
      showMapTypeSelector: false
    });

    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', () => {
      this.directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
      this.directionsManager.setRenderOptions({itineraryContainer: document.getElementById('printoutPanel')});
      this.directionsManager.showInputPanel('directionsInputContainer');

      // Add event handlers to directions manager.
      Microsoft.Maps.Events.addHandler(this.directionsManager, 'directionsError', this.directionsError.bind(this));
      Microsoft.Maps.Events.addHandler(this.directionsManager, 'directionsUpdated', this.directionsUpdated.bind(this));

      this.directionsManager.directionsUpdated();
    });
  }

  directionsUpdated(e) {
    // Get the current route index.
    const routeIdx = this.directionsManager.getRequestOptions().routeIndex;

    // Time is in seconds, convert to minutes and round off.
    this.travelTimeMinutes = Math.round(e.routeSummary[routeIdx].timeWithTraffic / 60);
  }

  directionsError(e) {
    alert('Error: ' + e.message + '\r\nResponse Code: ' + e.responseCode);
  }
}
