import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionContentComponent } from './sessions-list/session-content.component';
@NgModule({
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventsThumbnailComponent,
    EventsListComponent,
    EventsDetailComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionsListComponent,
    SessionContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 2000
    }),
    RouterModule.forRoot([
      { path: 'events', component: EventsListComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'sessions/new', component: CreateSessionComponent },
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
