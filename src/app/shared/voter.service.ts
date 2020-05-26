import { Injectable } from '@angular/core';
import { ISessions } from './i-event';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  removeVote(eventId:number, session: ISessions, currentUser: string){
      session.voters = session.voters.filter(voters => voters != currentUser);
      let url  = `/api/events/${eventId}/sessions/${session.id}/voters/${currentUser}`;
      this.http.delete(url,).pipe(catchError(this.handleError('removeVote Method'))).subscribe();
  }

  addVote(eventId: number, session: ISessions, currentUser: string){
      session.voters.push(currentUser);

      let url  = `/api/events/${eventId}/sessions/${session.id}/voters/${currentUser}`;
      let options = { headers: new HttpHeaders({ contentType: 'application/json'})};
      this.http.post(url, {}, options).pipe(catchError(this.handleError('addVote Method'))).subscribe();
  }

  userVoted(session: ISessions, currentUser: string):boolean{
      return session.voters.some(voters => voters === currentUser);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error('handleError || ', error);
      return of(result as T);
    };
  }
}
