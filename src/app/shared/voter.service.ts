import { Injectable } from '@angular/core';
import { ISessions } from './i-event';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  removeVote(session: ISessions, currentUser: string){
      session.voters = session.voters.filter(voters => voters != currentUser);
  }

  addVote(session: ISessions, currentUser: string){
      session.voters.push(currentUser);
  }

  userVoted(session: ISessions, currentUser: string):boolean{
      return session.voters.some(voters => voters === currentUser);
  }
}
