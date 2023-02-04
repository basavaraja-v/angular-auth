import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  error: string;

  // constructor(private fireAuth: AngularFireAuth) {}
  constructor() {}

  ngOnInit(): void {}

  signup() {
    // this.fireAuth.createUserWithEmailAndPassword(this.email, this.password)
    //   .then(() => {
    //     // sign up successful
    //   })
    //   .catch(error => {
    //     this.error = error.message;
    //   });
  }
}
