import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsThumbnailComponent } from './events-thumbnail/events-thumbnail.component';
import { EventsListComponent } from './events-list/events-list.component';
import { ToastrModule } from 'ngx-toastr';
import { EventsDetailComponent } from './events-detail/events-detail.component';
import { RouterModule, Router } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { CanActivateEventService } from './shared/can-activate-event.service';
import { ErrorComponent } from './shared/error/error.component';
import { ConfirmCreateGuardService } from './shared/confirm-create-guard.service';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventsThumbnailComponent,
    EventsListComponent,
    EventsDetailComponent,
    CreateEventComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 2000
    }),
    RouterModule.forRoot([
      { path: 'events', component: EventsListComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'events/new', component: CreateEventComponent, canDeactivate: [ConfirmCreateGuardService]},
      { path: 'events/:id', component: EventsDetailComponent, canActivate: [CanActivateEventService] },
      { path: '', pathMatch: 'full', redirectTo: '/events' },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
    ])
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
