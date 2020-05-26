import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ToastrService } from 'ngx-toastr';
import { IEvent } from '../shared/i-event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];
  constructor(private eventsService: EventsService, private toastr: ToastrService) { }

  ngOnInit(): void {
      this.eventsService.getEvents().subscribe({
        next: observableEvents => {
            this.events = observableEvents;
            console.log('this is happening in subscribe > ' , observableEvents);
        },
        error: err => console.log('in events-list > ' , err)
    });
  }

  onEventClickHandler(message: string){
      this.toastr.info(message,'Event Selected');
      console.log("onEventClickHandler" , message);
  }

}
