import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'session-content',
  templateUrl: 'session-content.component.html',

})

export class SessionContentComponent implements OnInit {
  showBody: boolean = false;
  constructor() { }

  ngOnInit() { }

  toggle(){
      this.showBody = !this.showBody;
  }
}
