import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var gapi: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  requests: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.requests = af.database.list('/requests');
  }

  login() {
    this.af.auth.login();
  }

  signOut() {
    this.af.auth.logout();
  }
}
