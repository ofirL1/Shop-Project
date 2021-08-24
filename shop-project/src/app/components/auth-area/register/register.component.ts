import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { UserModel } from '../../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user = new UserModel;
  public secondScreen = false;
  public idExist = false;
  public validationErrors: any;

  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  //check if the first form is vaild(check if id exist in the server).
  public async validateFirstScreen(_id: string, email: string, username: string){
    try{
      const exist = await this.AuthService.checkIfIdExist(_id,email,username);
      if(Object.entries(exist).length === 0){
        this.secondScreen = true;
      }
      console.log(exist);
      this.validationErrors = exist;
    }
    catch(err){
      // this.idExist = true;
      console.log(err)

    }
  }

  public async register(){
    try{
      console.log(this.user);
      await this.AuthService.registerUser(this.user);
      this.router.navigateByUrl("/")
    }
    catch(err){
      alert(err.message)
    }
    

  }

}
