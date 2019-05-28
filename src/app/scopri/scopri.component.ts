import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scopri',
  templateUrl: './scopri.component.html',
  styleUrls: ['./scopri.component.scss']
})
export class ScopriComponent implements OnInit {
  loading = true;

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
    this.showDescription('asti');
  }

  showDescription(place: string) {
    this.showedDescription = this.descriptions[place];
  }

  onLoad() {
    console.log('loaded');
  }

  getImage(place: string) {
    return `assets/imgs/scopri/${place}.jpg`;
  }

  navigate(place: string) {
    this.router.navigate(['province', place]);
  }
}
