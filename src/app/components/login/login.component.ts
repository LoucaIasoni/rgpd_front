import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  singInDisplay = true;
  signUpDisplay = false;
  forgotPassword = false;

  constructor(
      private router: Router
  ) {
  }

  async ngOnInit() {

  }

  signInNow() {
    this.router.navigate(['/home']);
  }

}
