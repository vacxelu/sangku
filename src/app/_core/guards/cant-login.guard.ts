import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CantLoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    if(localStorage.getItem("user")){
      this.router.navigate(['/'])
      return false;
    }
    else{
      return true
    }
  }
    
  
  
}
