import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  requests: FirebaseListObservable<any[]>;
  info: any;

  constructor(public af: AngularFire) {
    this.requests = af.database.list('/requests');
    this.info = af.auth.subscribe(auth => auth);
    console.log(this.info);
  }

  login() {
    this.af.auth.login();
  }

  signOut() {
    this.af.auth.logout();
  }
}
