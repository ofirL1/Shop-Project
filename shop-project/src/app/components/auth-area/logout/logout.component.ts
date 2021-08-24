import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-logout',
    template: ""
})
export class LogoutComponent implements OnInit {

    constructor(
        private myAuthService: AuthService,
        private Router: Router) { }

    ngOnInit(): void {
        try {
            this.myAuthService.logout();
            this.Router.navigateByUrl("/");
        }
        catch (err) {
        }
    }

}
