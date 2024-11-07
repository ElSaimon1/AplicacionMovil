import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa-junta',
  templateUrl: './mapa-junta.page.html',
  styleUrls: ['./mapa-junta.page.scss'],
})
export class MapaJuntaPage implements OnInit {

  constructor() { }
  map: mapboxgl.Map;
  selectedPoint: mapboxgl.LngLat;

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    // Configura tu token de Mapbox
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZXNtb3JhbGVzYyIsImEiOiJjbTM1d2xnN3EwNHE2MmlvazF2emthYmJnIn0.uq7KijEBtck4dMsXh3ffdw';

    // Crea el mapa
    this.map = new mapboxgl.Map({
      container: 'map', // El contenedor ID en el HTML
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
      center: [-71.5329128497927, -33.03375647398299], // Coordenadas iniciales [lng, lat]
      zoom: 9 // Nivel de zoom inicial
    });

    // Agrega controles de navegación (zoom y rotación)
    this.map.addControl(new mapboxgl.NavigationControl());

    // Captura el clic en el mapa para seleccionar un punto
    this.map.on('click', (event) => {
      const coordinates = event.lngLat;
      console.log('Punto seleccionado:', coordinates);

      // Guarda el punto seleccionado
      this.selectedPoint = coordinates;

      // Elimina cualquier marcador previo
      document.querySelectorAll('.mapboxgl-marker').forEach(marker => marker.remove());

      // Crea un marcador en el punto seleccionado
      new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(this.map);
    });
  }
}

