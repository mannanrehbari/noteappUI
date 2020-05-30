import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navpanel',
  templateUrl: './navpanel.component.html',
  styleUrls: ['./navpanel.component.css']
})
export class NavpanelComponent implements OnInit {


  constructor(private router: Router,
    public authService: AuthService) { }

  loggedIn: boolean;

  ngOnInit(): void {
    this.authService.loggedInEvent.subscribe(
      () => {
        this.loggedIn=true;
      }
    );

  }

  onTitleClick() {
    if(this.loggedIn){
      this.router.navigate(['/']);
    }
  }

  login() {
    this.router.navigate(['auth']);
  }
  logout() {
    this.authService.logout();
    this.loggedIn = false;
    this.router.navigate(['auth']);
  }

}
