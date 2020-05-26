import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: '../sessions-list/upvote.component.html',
  styleUrls: ['upvote.component.css']
})

export class UpvoteComponent{
  @Input()voted: boolean = false;
  @Input()count: number;
  @Output() doVote = new EventEmitter();


  doClick(){
    this.doVote.emit('doVoteChange');
  }
}
