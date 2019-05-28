import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagesURL: string[] = [
    'assets/imgs/carousel/1.jpg',
    'assets/imgs/carousel/2.jpg',
    'assets/imgs/carousel/3.jpg',
    'assets/imgs/carousel/4.jpg',
    'assets/imgs/carousel/5.jpg',
    'assets/imgs/carousel/6.jpg'
  ];

  constructor() {

  }

  ngOnInit() {}
}
