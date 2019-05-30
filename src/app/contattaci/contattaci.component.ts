import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contattaci',
  templateUrl: './contattaci.component.html',
  styleUrls: ['./contattaci.component.scss']
})
export class ContattaciComponent implements OnInit {
  emailPlaceholder: string;
  names = [
    'arya_stark',
    'jon.snow',
    'iron_man',
    'capitan_america',
    'mario.rossi',
    'wonder.woman'
  ];
  domini = [
    'aruba.com',
    'yahoo.com',
    'live.com',
    'hotmail.com',
    'gmail.com',
    'email.com'
  ];

  constructor() {}

  ngOnInit() {
    this.emailPlaceholder = this.getRandomEmail();
  }

  getRandomName() {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }

  getRandomDominio() {
    return this.domini[Math.floor(Math.random() * this.domini.length)];
  }

  getRandomEmail() {
    return this.getRandomName() + '@' + this.getRandomDominio();
  }
}
