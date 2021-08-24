import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import store from '../redux/store';

// Guard from entering or leaving a specific route in the front (not in the back)

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    public constructor(private router: Router) { }

    public canActivate(): boolean {

        // If user is logged-in: 
        if (store.getState().authState.user)
            return true; // You can enter the route

        // If user isn't logged-in:
        this.router.navigateByUrl("/home");
        return false; // You can't enter the route
    }

}
