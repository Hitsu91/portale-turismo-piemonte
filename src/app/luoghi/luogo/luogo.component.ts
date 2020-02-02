import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento, chunkArray } from 'src/app/home/eventi/evento.model';

@Component({
  selector: 'app-luogo',
  templateUrl: './luogo.component.html',
  styleUrls: ['./luogo.component.scss']
})
export class LuogoComponent implements OnInit {
  title: string;
  description: string;

  // SCAFFHOLDING DELETE THIS AFTER
  eventi: Evento[];
  eventiGroup: Evento[][];
  //

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.title = param.luogo;
    });

    // SCAFFHOLDING
    this.eventi = [
      {
        img: { src: 'assets/imgs/asti/sagre_1.jpg', alt: 'sagre' },
        date: { day: 12, month: 'SET' },
        title: 'Festival delle sagre',
        place: 'Asti',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisl
        viverra, tristique nibh sed, aliquam nibh. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse nec rutrum ligula, in tincidunt nisl. Etiam cursus ac mi
        vitae imperdiet.`
      },
      {
        img: { src: 'assets/imgs/asti/palio_1.jpg', alt: 'palio' },
        date: { day: 19, month: 'SET' },
        title: 'Festival delle sagre',
        place: 'Asti',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisl
        viverra, tristique nibh sed, aliquam nibh. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse nec rutrum ligula, in tincidunt nisl. Etiam cursus ac mi
        vitae imperdiet.`
      }
    ];
    this.eventiGroup = chunkArray(this.eventi.reverse(), 3).reverse();
    //
  }
}
