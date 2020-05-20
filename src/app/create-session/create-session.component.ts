import { Component, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ISessions } from '../shared/i-event';
@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  @Output() addNewSession= new EventEmitter();
  @Output() goBack = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('',Validators.required);
    this.presenter = new FormControl('',Validators.required);
    this.duration = new FormControl('',Validators.required);
    this.level = new FormControl('',Validators.required);
    this.abstract = new FormControl('',[Validators.required, Validators.maxLength(400), this.restrictedWords]);

    this.sessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  restrictedWords(control: FormControl): {[key: string]: any}{
      return control.value.includes('fuck')? {'restrictedWords':'fuck'} : null;
  }

  saveSession(formValues){
    let session: ISessions = formValues;
    this.addNewSession.emit(session);
  }

  doGoBack(){
    this.goBack.emit();
  }

}
