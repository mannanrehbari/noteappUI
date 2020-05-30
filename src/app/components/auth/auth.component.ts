import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService, AuthReq } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  //registration
  registerForm: FormGroup;
  regSubmitted = false;

  // login
  loginForm: FormGroup;
  loginSubmitted = false;

  subscription: Subscription;


  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  submitReg(tabGroup: any) {
    this.regSubmitted = true;
    if (this.registerForm.invalid) {
      this._snackBar.open('Invalid Data', 'Try again!', {
        duration: 3000,
      });
      return;
    }

    this.authService.registerUser(this.registerForm.get('email').value ,this.registerForm.get('password').value ).subscribe(
      (data) => {
        this._snackBar.open(this.registerForm.get('email').value, 'Registration successful!', {
          duration: 5000,
        });
        tabGroup.selectedIndex = 0;
        this.registerForm.reset();
        Object.keys(this.registerForm.controls).forEach((key) => {
          this.registerForm.get(key).setErrors(null);
        });
      }
    );
  }
  submitLogin(){
    this.loginSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(email, password);
    this.authService.loggedInEvent.subscribe(
       () => {
         this._snackBar.open('Login successful', 'Dismiss', {
           duration: 4000
         });
         this.router.navigate(['/']);
      }
    );


  }



  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get g() { return this.loginForm.controls;}

  clearData(){
    this.ngOnInit();
  }



}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.MustMatch) {
      //return if another validator has already found an error on the matching control
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }

}