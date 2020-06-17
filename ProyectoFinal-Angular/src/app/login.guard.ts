import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    if (localStorage.getItem('user-token')) {
      return true;
    } else {
      this.router.navigate(['/principal']);
      return false;
    }
  }

}
