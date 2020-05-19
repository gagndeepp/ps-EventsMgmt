import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string ;
  password: string ;
  loginmousefocus: boolean = false;

  constructor(private authService: AuthUserService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(formValues){
      this.authService.authUser(this.userName,this.password);
      this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }

}
