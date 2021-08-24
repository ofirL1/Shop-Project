import { UserModel } from './../models/user.model';
import { CredentialsModel } from './../models/credentials.model';
import store  from 'src/app/redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { userLoggedInAction, userLoggedOutAction, userRegisteredAction } from '../redux/auth-state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public async registerUser(user: UserModel){
    const addedUser = await this.http.post<UserModel>(environment.registerUrl, user).toPromise();
    store.dispatch(userRegisteredAction(addedUser));
    return addedUser;
  }

  public async checkIfIdExist(_id: string, email: string,username: string){
    const isExist = await this.http.post(environment.registerValidate,{_id,email,username}).toPromise();
    return isExist;
  }

  public async loginUser(credintials: CredentialsModel){
    const loginUser = await this.http.post<any>(environment.loginUrl, credintials).toPromise();
    console.log(loginUser);
    if(loginUser.activeCart){
      localStorage.setItem("activeCart",JSON.stringify(loginUser.activeCart))
    }
    store.dispatch(userLoggedInAction(loginUser.loginUser));
    return loginUser;
  }

  public logout() {
    store.dispatch(userLoggedOutAction());
}

}
