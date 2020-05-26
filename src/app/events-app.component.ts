import { Component } from '@angular/core';
import { AuthUserService } from './user/auth-user.service';

@Component({
  selector: 'events-app',
  templateUrl: './events-app.component.html'
})
export class EventsAppComponent{
  title = 'Upcoming Events List';

  constructor(private authService: AuthUserService){

  }

  ngOnInit(){
    this.authService.authStatus();
  }
}
