import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../user/auth-user.service';
import { ISessions } from '../shared/i-event';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm = '';
  foundSessions: ISessions[];
  constructor(public authService: AuthUserService) { }

  ngOnInit(): void {
  }

  doSearchSessions(searchQuery:string){
    console.log('doSearchSessions>' , searchQuery);
    //pending implementation
  }

}
