
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(
    private router: Router

  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // return this.verificarAcesso();
    return null;
  }


  private verificarAcesso() {
    if (sessionStorage.getItem("token")) {
      var token = sessionStorage.getItem("token");
      if (!this.jwtHelper.isTokenExpired(token)) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }

    } else {
      this.router.navigate(['/login']);

      return false;
    }
  }
}
