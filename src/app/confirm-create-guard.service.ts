import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEventComponent } from './create-event/create-event.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCreateGuardService implements CanDeactivate<CreateEventComponent> {

  constructor() { }
  canDeactivate(component: CreateEventComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(!component.formComplete){
      return window.confirm('You haven\'t filled in the form yet, Sure want to navigate away?');
    }
    return true;
  }
}
