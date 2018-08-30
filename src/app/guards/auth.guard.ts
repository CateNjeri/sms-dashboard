import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem(environment.userKey) !== 'null'
            && localStorage.getItem(environment.userKey) &&
            localStorage.getItem(environment.currentUserProfileKey) !== 'null'
            && localStorage.getItem(environment.currentUserProfileKey)) {
            return true;
        }
        this.router.navigate(['/auth/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
