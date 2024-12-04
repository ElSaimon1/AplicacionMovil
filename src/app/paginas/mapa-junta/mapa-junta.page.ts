import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa-junta',
  templateUrl: './mapa-junta.page.html',
  styleUrls: ['./mapa-junta.page.scss'],
})
export class MapaJuntaPage implements OnInit {

  map: mapboxgl.Map;
  selectedPoint: mapboxgl.LngLat;
  userMarker!: mapboxgl.Marker;

  // Inyecta Geolocation en el constructor
  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZXNtb3JhbGVzYyIsImEiOiJjbTM1d2xnN3EwNHE2MmlvazF2emthYmJnIn0.uq7KijEBtck4dMsXh3ffdw';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.5329128497927, -33.03375647398299],
      zoom: 9
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('click', (event) => {
      const coordinates = event.lngLat;
      console.log('Punto seleccionado:', coordinates);

      this.selectedPoint = coordinates;

      document.querySelectorAll('.mapboxgl-marker').forEach(marker => marker.remove());

      new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(this.map);
    });

    this.showUserLocation();
  }

  showUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const userCoordinates: [number, number] = [resp.coords.longitude, resp.coords.latitude];

      this.map.setCenter(userCoordinates);

      if (this.userMarker) {
        this.userMarker.setLngLat(userCoordinates);
      } else {
        this.userMarker = new mapboxgl.Marker({ color: 'blue' })
          .setLngLat(userCoordinates)
          .addTo(this.map);
      }

      this.selectedPoint = new mapboxgl.LngLat(userCoordinates[0], userCoordinates[1]);

    }).catch((error) => {
      console.error('Error obteniendo la ubicación:', error);
    });
  }
}