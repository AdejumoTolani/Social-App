import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/Services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user?:User = {
    Name: "Omotolani",
    Username: "Sho",
    EmailAddress: "www.adejumo@gmail.com",
    Password:"1234",
    Online: true,
    Posts: [
      {
        Post:'I love food so much',
        likes:14}
    ],
  ProfilePicture:"https://i.pinimg.com/736x/24/d4/b2/24d4b25abb22a028e0cafaef61802bc0.jpg"
  };
    // constructor(private loginService:LoginService){
    //   this.user = this.loginService.SendUserInfo()
    //   console.log(this.user)
    // }
    ngOnInit(): void {
        
    }
}
