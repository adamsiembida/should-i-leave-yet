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

      this.hideScrollBar();
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

  hideScrollBar() {
    document.getElementById('printoutPanel').style.width = String(360 + this.getScrollBarWidth()) + 'px';
  }

  getScrollBarWidth() {
    const inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    const w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let w2 = inner.offsetWidth;

    if (w1 === w2) {
      w2 = outer.clientWidth;
    }

    document.body.removeChild(outer);

    return (w1 - w2);
  }
}
