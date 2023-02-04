import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  async login() {
    try {
      // await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['/']);
    } catch (err) {
      this.error = err.message;
    }
  }
}
