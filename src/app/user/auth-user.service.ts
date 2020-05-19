import { Injectable } from '@angular/core';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  currentUser: IUser;

  constructor() {

  }

  getUser(): IUser{
    return this.currentUser;
  }

  authUser(firstName: string,password:string){
    this.currentUser = {firstName: 'Chashmu',id: 1 ,lastName:'Singh', userName: 'chasmu_'};
  }

  updateUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated(): boolean{
    return !!this.currentUser;
  }
}
