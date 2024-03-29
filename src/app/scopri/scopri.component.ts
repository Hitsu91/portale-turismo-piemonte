import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scopri',
  templateUrl: './scopri.component.html',
  styleUrls: ['./scopri.component.scss']
})
export class ScopriComponent implements OnInit {
  changed: boolean;
  timeout: NodeJS.Timer;
  currentPlace: string;

  descriptions = {
    verbano: { name: 'Verbano Cusio Ossola', description: 'Verbano, Ipsum ts' },
    novara: { name: 'Novara', description: 'Novara, ipsum etc' },
    vercelli: { name: 'Vercelli', description: 'Verbano, Ipsum ts' },
    biella: { name: 'Biella', description: 'Verbano, Ipsum ts' },
    torino: { name: 'Torino', description: 'Verbano, Ipsum ts' },
    asti: { name: 'Asti', description: 'Asti, bla bla bla' },
    alessandria: { name: 'Alessandria', description: 'Alessandria, Ipsum' },
    cuneo: { name: 'Cuneo', description: 'Cuneo, Ipsum' }
  };

  showedDescription: { name: string; description: string };

  constructor(private router: Router) {}

  ngOnInit() {
    this.changed = true;
    this.showedDescription = this.descriptions.asti;
    this.timeout = setTimeout(() => {
      this.changed = false;
    }, 300);
  }

  showDescription(place: string) {
    if (this.currentPlace === place) {
      return;
    }
    clearTimeout(this.timeout);
    this.changed = true;
    this.timeout = setTimeout(() => {
      this.changed = false;
      this.showedDescription = this.descriptions[place];
      this.currentPlace = place;
    }, 300);
  }

  getImage(place: string) {
    return `assets/imgs/scopri/${place.split(' ').join('-')}.jpg`;
  }

  navigate(place: string) {
    this.router.navigate(['province', place]);
  }
}
