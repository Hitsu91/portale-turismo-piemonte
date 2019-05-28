import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.scss']
})
export class EventiComponent implements OnInit {
  eventi: Evento[];
  eventiGroup: Evento[][];

  constructor() {
    this.eventi = [
      {
        img: { src: 'assets/imgs/home/sagre_1.jpg', alt: 'sagre' },
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
        img: {
          src: 'assets/imgs/home/torino_palazzo_1.jpg',
          alt: 'torino palazzo'
        },
        date: { day: 18, month: 'GIU' },
        title: 'Alla scoperta dei palazzi storici',
        place: 'Torino',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisl
        viverra, tristique nibh sed, aliquam nibh. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse nec rutrum ligula, in tincidunt nisl. Etiam cursus ac mi
        vitae imperdiet. Aenean non rutrum mauris, vestibulum varius nisl. In
        in sollicitudin nibh. Maecenas sed sollicitudin risus.`
      },
      {
        img: { src: 'assets/imgs/home/uva_1.jpg', alt: 'uva' },
        date: { day: 25, month: 'LUG' },
        title: 'Visita alla cantina sociale',
        place: 'Vinchio',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisl
        viverra, tristique nibh sed, aliquam nibh. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse nec rutrum ligula, in tincidunt nisl. Etiam cursus ac mi
        vitae imperdiet.`
      },
      {
        img: { src: 'assets/imgs/home/uva_1.jpg', alt: 'uva' },
        date: { day: 25, month: 'LUG' },
        title: 'Visita alla cantina sociale',
        place: 'Vinchio',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisl
        viverra, tristique nibh sed, aliquam nibh. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse nec rutrum ligula, in tincidunt nisl. Etiam cursus ac mi
        vitae imperdiet.`
      },
      {
        img: { src: 'assets/imgs/home/uva_1.jpg', alt: 'uva' },
        date: { day: 25, month: 'LUG' },
        title: 'Visita alla cantina sociale',
        place: 'Vinchio',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisl
        viverra, tristique nibh sed, aliquam nibh. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse nec rutrum ligula, in tincidunt nisl. Etiam cursus ac mi
        vitae imperdiet.`
      },
      {
        img: { src: 'assets/imgs/home/uva_1.jpg', alt: 'uva' },
        date: { day: 25, month: 'LUG' },
        title: 'Visita alla cantina sociale',
        place: 'Vinchio',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisl
        viverra, tristique nibh sed, aliquam nibh. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse nec rutrum ligula, in tincidunt nisl. Etiam cursus ac mi
        vitae imperdiet.`
      },
      {
        img: { src: 'assets/imgs/home/uva_1.jpg', alt: 'uva' },
        date: { day: 25, month: 'LUG' },
        title: 'Visita alla cantina sociale',
        place: 'Vinchio',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisl
        viverra, tristique nibh sed, aliquam nibh. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse nec rutrum ligula, in tincidunt nisl. Etiam cursus ac mi
        vitae imperdiet.`
      }
    ];
    this.eventiGroup = chunkArray(this.eventi.reverse(), 3).reverse();
  }

  ngOnInit() {}
}

interface Evento {
  img: { src: string; alt: string };
  date: { day: number; month: string };
  title: string;
  place: string;
  content: string;
}

export function chunkArray(myArray: any[], chunkSize: number): Evento[][] {
  const results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunkSize).reverse());
  }

  return results;
}
