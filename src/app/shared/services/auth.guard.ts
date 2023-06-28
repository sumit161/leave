import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree  {


    let userRole = route.data['userrole'];
    let localstoragedata = localStorage.getItem("Userrole")
console.log(userRole);
console.log(localstoragedata);



if(userRole===localstoragedata){
  console.log("true");

  return true;
}else{
  console.log("false");

  return false;
}

   /*  return this._authService.IsAuthenticated().then((isAuth: boolean) => {
      if (isAuth === true) {
        return true;
      } else {

        return false;
      }
    }); */
  }


}
