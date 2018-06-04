import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyD02q0SuYUXMA-SawI3QX4tBwGZlJHS0oY',
      authDomain: 'ocblog-1871f.firebaseapp.com',
      databaseURL: 'https://ocblog-1871f.firebaseio.com',
      projectId: 'ocblog-1871f',
      storageBucket: 'ocblog-1871f.appspot.com',
      messagingSenderId: '573262894393'
    };
    firebase.initializeApp(config);
  }
}
