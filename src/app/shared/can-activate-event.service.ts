import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventsService } from './events.service';
@Injectable({
  providedIn: 'root',
})
export class CanActivateEventService implements CanActivate {
  constructor(private eventsService: EventsService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: import('@angular/router').RouterStateSnapshot
  ):
    | boolean
    | import('@angular/router').UrlTree
    | import('rxjs').Observable<boolean | import('@angular/router').UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    let validRoute = true;
    this.eventsService.getEvent(+route.params['id']).subscribe({
      next: (observableEvent) => {
        // console.log('subscribe ke andar', observableEvent);
        if (observableEvent === null) this.router.navigate(['/error']);
      },
    });
    return validRoute;
  }
}
