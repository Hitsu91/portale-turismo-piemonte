import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.scss']
})
export class MappaComponent implements OnInit {
  lat = 44.902618;
  lng = 8.206948;
  markers: Marker[] = [
    { lat: 44.903, lng: 8.208547, draggable: false, label: 'Pranzo gratis' },
    { lat: 44.904, lng: 8.208747, draggable: true }
  ];

  constructor() {}

  ngOnInit() {}
}

interface Marker {
  lat: number;
  lng: number;
  icon?: string;
  label?: string;
  draggable: boolean;
}
