import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-mappa-leaflet',
  templateUrl: './mappa-leaflet.component.html',
  styleUrls: ['./mappa-leaflet.component.scss']
})
export class MappaLeafletComponent implements OnInit {
  map: any;

  constructor() {}

  ngOnInit() {
    this.map = L.map('map').setView([44.902819, 8.206293], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([44.900676, 8.197506], {
      icon: L.icon({
        iconUrl: 'assets/leaflet/images/marker-icon.png',
        shadowUrl: 'assets/leaflet/images/marker-shadow.png'
      })
    })
      .bindPopup('<strong>Cattedrale di Asti</strong><p>Lorem ipsum</p>')
      .addTo(this.map);

    this.map.on('click', this.testClick);
  }

  testClick(e) {
    console.log(e);
  }
}
