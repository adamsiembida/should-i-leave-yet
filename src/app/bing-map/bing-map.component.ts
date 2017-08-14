import { AfterViewInit, Component, Renderer2, EventEmitter, Output } from '@angular/core';

declare var Microsoft: any;
declare var mapApiLoaded: any;

@Component({
  selector: 'app-bing-map',
  templateUrl: './bing-map.component.html',
  styleUrls: ['./bing-map.component.css']
})
export class BingMapComponent implements AfterViewInit {

  @Output()
  onDirectionsChanged = new EventEmitter<number>();

  private directionsManager;
  private map;
  private waypoints;

  private mapGenerated = false;

  constructor(renderer: Renderer2) {
    // Listen for the Bing Map API to finish loading in index.html.
    renderer.listen('document', 'bingMapApiLoaded', (event) => {
      this.generateMap();
    });
  }

  ngAfterViewInit() {
    this.hideDirectionsPanelScrollBar();

    if (mapApiLoaded === true) {
      this.generateMap();
    }
  }

  private generateMap() {
    // Only allow this function to be run once.
    if (this.mapGenerated === false) {
      this.mapGenerated = true;

      this.map = new Microsoft.Maps.Map(document.getElementById('bing-map'), {
        credentials: 'AqN4AgKznjhDFoTX722rYmD05XvMvgzufcmcAFP5yYh1n__0y7DcNvQ9xmyBAVAm',
        showMapTypeSelector: false,
        center: new Microsoft.Maps.Location(47.606209, -122.332071),
        zoom: 12
      });

      Microsoft.Maps.loadModule('Microsoft.Maps.Directions', () => {
        this.directionsManager = new Microsoft.Maps.Directions.DirectionsManager(this.map);
        this.directionsManager.setRenderOptions({itineraryContainer: document.getElementById('directions-panel')});
        this.directionsManager.showInputPanel('directions-input-panel');

        // Add event handlers to directions manager.
        Microsoft.Maps.Events.addHandler(this.directionsManager, 'directionsError', this.onDirectionsError.bind(this));
        Microsoft.Maps.Events.addHandler(this.directionsManager, 'directionsUpdated', this.onDirectionsUpdated.bind(this));
      });
    }
  }

  requestTravelTimeUpdate() {
    const requestedWaypoints = this.directionsManager.getAllWaypoints();
    this.remakeDirectionsManager(requestedWaypoints);

    this.directionsManager.calculateDirections();
  }

  private onDirectionsUpdated(e) {
    const routeIdx = this.directionsManager.getRequestOptions().routeIndex;
    const travelTimeSeconds: number = e.routeSummary[routeIdx].timeWithTraffic;
    const travelTimeMinutes = travelTimeSeconds / 60;

    this.onDirectionsChanged.emit(travelTimeMinutes);
  }

  private onDirectionsError(e): void {
    alert('Error: ' + e.message + '\r\nResponse Code: ' + e.responseCode);
  }

  private hideDirectionsPanelScrollBar(): void {
    document.getElementById('directions-panel').style.width = String(360 + this.getScrollBarWidth()) + 'px';
  }

  private remakeDirectionsManager(waypoints) {
    this.directionsManager.clearAll();
    this.directionsManager.setRenderOptions({itineraryContainer: document.getElementById('directions-panel')});
    this.directionsManager.showInputPanel('directions-input-panel');

    for (const waypoint of waypoints) {
      this.directionsManager.addWaypoint(waypoint);
    }
  }

  private getScrollBarWidth(): number {
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
