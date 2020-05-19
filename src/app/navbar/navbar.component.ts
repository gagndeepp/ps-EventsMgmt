import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../user/auth-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public authService: AuthUserService) { }

  ngOnInit(): void {
  }

}
