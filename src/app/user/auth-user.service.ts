import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  getUser(): IUser {
    return this.currentUser;
  }

  authUser(userName: string, password: string) {
    // this.currentUser = {firstName: 'Chashmu',id: 1 ,lastName:'Singh', userName: 'chasmu_'};
    let loginInfo = { username: userName, password: password };
    let options = {
      headers: new HttpHeaders({ contentType: 'application/json' }),
    };
    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        tap((data) => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }

  updateUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let options = {
      headers: new HttpHeaders({ contentType: 'application/json' }),
    };

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  doLogout(){

    let options = {
      headers: new HttpHeaders({ contentType: 'application/json' }),
    };

    this.currentUser = undefined;
    return this.http.post('/api/logout' , {} , options);

  }

  authStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap((data) => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
