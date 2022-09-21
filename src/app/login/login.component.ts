import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router) {}

  ngOnInit(): void {}

  password = new FormControl('', [Validators.required, Validators.min(8)]);
  username = new FormControl('', [Validators.required, Validators.max(8)]);

  login() {
    if(this.password.valid && this.username.valid )
    {
      this.router.navigate(['/employees']);
    }
    else
    {
      console.log('Not valid');
    }
  }
}
