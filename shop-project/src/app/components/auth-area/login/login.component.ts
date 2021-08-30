import { NotifyService } from './../../../services/notify.service';
import { UserModel } from 'src/app/models/user.model';
import { CredentialsModel } from './../../../models/credentials.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new UserModel;
  public credintials = new CredentialsModel;
  constructor(private AuthService: AuthService, private router: Router, private NotifyService: NotifyService) { }

  ngOnInit(): void {
  }

  public async login(){
    try{
      await this.AuthService.loginUser(this.credintials);
      this.router.navigateByUrl("/home")
    }
    catch(err){
      this.NotifyService.error(err)
    }
    

  }

}
