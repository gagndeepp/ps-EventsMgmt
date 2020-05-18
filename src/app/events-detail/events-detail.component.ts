import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventsService } from '../shared/events.service';
import { IEvent } from '../shared/i-event';
@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

  event: IEvent;
  constructor(private activatedRoute: ActivatedRoute, private EventService: EventsService) { }

  ngOnInit(): void {
      this.event = this.EventService.getEvent(+this.activatedRoute.snapshot.params['id']);
  }


}
