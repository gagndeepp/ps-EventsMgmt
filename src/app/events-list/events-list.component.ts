import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any[];
  constructor(private eventsService: EventsService, private toastr: ToastrService) { }

  ngOnInit(): void {
      this.events = this.eventsService.getEvents();
  }

  onEventClickHandler(message: string){
      this.toastr.info(message,'Event Selected');
      console.log("onEventClickHandler" , message);
  }

}
