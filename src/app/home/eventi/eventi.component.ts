import { Component, OnInit } from '@angular/core';
import { Evento } from './evento.model';
import { EventiService } from './eventi.service';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.scss']
})
export class EventiComponent implements OnInit {
  eventiGroup: Evento[][];

  constructor(private eventiService: EventiService) {}

  ngOnInit() {
    this.eventiGroup = this.eventiService.getEventi(3);
  }
}
