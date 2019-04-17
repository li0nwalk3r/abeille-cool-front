import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (sessionStorage.getItem("type")) {
      console.log(sessionStorage.getItem("type"));
      if(next.data.roles && next.data.roles.indexOf(sessionStorage.getItem("type"))===-1){
        this.router.navigate(['/actualite'], {queryParams: {returnUrl: state.url}});
        return false;
      }
      return true;
    }
    this.router.navigate(['/connexion'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
