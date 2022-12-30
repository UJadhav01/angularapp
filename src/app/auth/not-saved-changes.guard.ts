import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface onNotSavedChanges{
  onUnsavedChanges:()=>Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class NotSavedChangesGuard implements CanDeactivate<onNotSavedChanges> {
  canDeactivate(component: onNotSavedChanges,route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      return component.onUnsavedChanges ? component.onUnsavedChanges() : true;
  }

}
