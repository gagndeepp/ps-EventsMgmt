import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthUserService } from '../auth-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor(private authService: AuthUserService, private router: Router) { }

  ngOnInit(): void {
      this.firstName = new FormControl(this.authService.getUser().firstName,[Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl(this.authService.getUser().lastName,Validators.required);
      this.editForm = new FormGroup({
        firstNameField: this.firstName,
        lastNameField: this.lastName
      })
  }

  validatefirstNameField():boolean{
      return this.firstName.valid || this.firstName.untouched;
  }
  validatelastNameField():boolean{
    return this.lastName.valid || this.lastName.untouched;
}

  saveProfile(formValues){
    if(this.editForm.valid){
      this.authService.updateUser(formValues.firstNameField, formValues.lastNameField);
      this.router.navigate(['/events']);
    }

  }

  doCancel(){
    this.router.navigate(['/events']);
  }
}
