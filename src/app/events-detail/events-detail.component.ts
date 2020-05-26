import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventsService } from '../shared/events.service';
import { IEvent, ISessions } from '../shared/i-event';
@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  toggleCreateSession: boolean = true;
  event: IEvent;
  filterSessionBy: string = 'all';
  sortSessionsBy: string = 'votes';
  constructor(private activatedRoute: ActivatedRoute, private EventService: EventsService) { }

  ngOnInit(): void {
      this.EventService.getEvent(+this.activatedRoute.snapshot.params['id']).subscribe({
        next: observableEvent => {
          this.event = observableEvent;
          console.log('event Detail event fetch' , observableEvent);
        }
      });
  }

  toggle(){
    this.toggleCreateSession = !this.toggleCreateSession;
  }

  addNewSession(session: ISessions){

    session.id = Math.max.apply('',this.event.sessions.map(s=> s.id)) + 1;

    console.log("session id >  " , session.id);

    if (session.id < 0)
      session.id = 1;
    session.voters = [];

    console.log('addnew Sessions' ,session);
    this.event.sessions.push(session);
    this.EventService.saveEvent(this.event).subscribe();
    this.toggleCreateSession = !this.toggleCreateSession;
  }

}
