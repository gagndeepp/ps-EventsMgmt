import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {

  @Input() sessions;

  constructor() { }

  ngOnInit(): void {
  }

}
