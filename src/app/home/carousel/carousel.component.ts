import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  imagesURL: { url: string; label: string }[] = [
    {
      url: 'assets/imgs/carousel/1.jpg',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      url: 'assets/imgs/carousel/2.jpg',
      label: 'Etiam at nisl viverra, tristique nibh sed, aliquam nibh'
    },
    {
      url: 'assets/imgs/carousel/3.jpg',
      label: 'Suspendisse nec rutrum ligula, in tincidunt nisl'
    },
    {
      url: 'assets/imgs/carousel/4.jpg',
      label: 'Cras a nunc id massa scelerisque tincidunt nec id tellus'
    },
    {
      url: 'assets/imgs/carousel/5.jpg',
      label: 'Nam sem velit, fringilla nec lacus sed, placerat interdum est'
    },
    {
      url: 'assets/imgs/carousel/6.jpg',
      label: 'Donec ut ante sit amet dolor viverra dignissim'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
