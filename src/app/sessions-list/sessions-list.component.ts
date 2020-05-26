import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISessions } from '../shared/i-event';
import { VoterService } from '../shared/voter.service';
import { AuthUserService } from '../user/auth-user.service';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css'],
})
export class SessionsListComponent implements OnInit, OnChanges {
  @Input() sessions: ISessions[];
  @Input() filterSessionBy: string;
  @Input() sortSessionsBy: string;
  @Input() eventId: number;
  visibleSessions: ISessions[];

  constructor(
    private voterService: VoterService,
    public authService: AuthUserService
  ) {}
  ngOnChanges(): void {
    if (this.sessions) {
      this.doFilterSession();
      this.visibleSessions.sort(
        this.sortSessionsBy === 'votes' ? sortByVotesDsc : sortByNameAsc
      );
    }
  }

  toggleVote(session: ISessions) {
    if (this.userVoted(session)) {
      this.voterService.removeVote(
        this.eventId,
        session,
        this.authService.currentUser.userName
      );
    } else {
      this.voterService.addVote(
        this.eventId,
        session,
        this.authService.currentUser.userName
      );
    }
  }

  userVoted(session: ISessions): boolean {
    return this.voterService.userVoted(
      session,
      this.authService.currentUser.userName
    );
  }

  doFilterSession() {
    if (this.filterSessionBy === 'all') {
      this.visibleSessions = this.sessions;
    } else {
      this.visibleSessions = this.sessions.filter(
        (ssn) => ssn.level.toLowerCase() === this.filterSessionBy
      );
    }
  }

  ngOnInit(): void {}
}

function sortByNameAsc(a: ISessions, b: ISessions) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name === b.name) {
    return 0;
  }
  return -1;
}

function sortByVotesDsc(a: ISessions, b: ISessions) {
  return b.level.length - a.level.length;
}
