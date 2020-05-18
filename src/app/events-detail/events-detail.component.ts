import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventsService } from '../shared/events.service';
@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

  event: any;
  constructor(private activatedRoute: ActivatedRoute, private EventService: EventsService) { }

  ngOnInit(): void {
      this.event = this.EventService.getEvent(+this.activatedRoute.snapshot.params['id']);
  }


}
