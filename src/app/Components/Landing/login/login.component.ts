import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/Services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username:string ='';
  password:string = '';
  
  constructor(private loginService:LoginService, private route:Router){
  }
  onClick(){
    if(this.loginService.users.some(user=>user.Username == this.username) && this.loginService.users.some(user=>user.Password == this.password)){
      this.route.navigate(['main']);
      this.loginService.GetUserInfo(this.username)
      
    }
  }


}
