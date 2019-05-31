import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DangKyComponent } from '../../home/trang-chu/form/dang-ky/dang-ky.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<DangKyComponent> {
  canDeactivate() {
    const mess = confirm("Bạn có muốn rời khỏi trang không?");
    if(mess){
      return true;
    }
    return false;
  }
}
