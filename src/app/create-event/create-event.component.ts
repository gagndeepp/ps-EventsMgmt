import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../shared/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: any;
  formComplete: boolean = false;

  constructor(private router: Router,private eventService: EventsService) { }

  ngOnInit(): void {
  }

  saveEvent(formValues){
    this.eventService.saveUser(formValues);
    this.formComplete = true;
    this.router.navigate(['/events']);
  }
  cancel(){
    this.router.navigate(['/events']);
  }

}
