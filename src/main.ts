import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDT9wADdiADTmhqvjrF3N6kk9tht9ACiAs",
    authDomain: "tracking-app-2574d.firebaseapp.com",
    databaseURL: "https://tracking-app-2574d.firebaseio.com",
    storageBucket: "tracking-app-2574d.appspot.com"
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Google,
    method: AuthMethods.Popup,
  })
]);
