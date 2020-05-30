import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Globalconstants } from 'src/app/global/globalconstants';
import { map } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loggedInEvent = new EventEmitter();

  userloggedin: boolean = false;

  constructor(private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar) { }

   authenticate(username, password) {
    this.http.post<any>(Globalconstants.serverURL + '/authenticate', {username, password})
    .subscribe( (data) => {
      localStorage.setItem('username', username);
      let jwtTok = 'Bearer ' + data.token;
      localStorage.setItem('token', jwtTok);
      this.loggedInEvent.emit();
      this.userloggedin = true;
    }, error => {
      this._snackBar.open('Login failed! Please try again', 'Dismiss', {
        duration: 4000
      });
    });
  }





  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.userloggedin = false;
    this._snackBar.open('Logged out!', 'Dismiss', {
      duration: 4000
    });
  }



  registerUser(email: string, password: string): Observable<any> {
    const authReq = new AuthReq();
    authReq.username = email;
    authReq.password = password;
    return this.http.post<AuthReq>(Globalconstants.serverURL + '/register', authReq);
  }

}

export class AuthReq {
  username: string;
  password: string;
}

export class AuthResp {
  jwt: string;
}