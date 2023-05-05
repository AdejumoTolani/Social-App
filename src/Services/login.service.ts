import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { Post } from 'src/app/post';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser?:User;
  users:User[] = [
    {
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
    ProfilePicture:"https://i.pinimg.com/736x/24/d4/b2/24d4b25abb22a028e0cafaef61802bc0.jpg"},
      {
        Name: "Timilehin",
        Username: "Nihel",
        EmailAddress: "idk@gmail.com",
        Password:"4321",
        Online: true,
        Posts: [
          {
            Post:`{I'm such a fine boy fr}`,
            likes:45}
        ]},
        {
          Name: "Temitope",
          Username: "Omokhefue",
          EmailAddress: "adejumo@gmail.com",
          Password:"9291",
          Online: true,
          Posts: [
            {
              Post:'Tolani is a great sister',
              likes:1000000000}
          ],
        ProfilePicture:'https://i.pinimg.com/originals/37/37/6b/37376be3d8288ca969bcffae97ec5037.jpg'}
  ]
  GetUserInfo(username:string){ 
    this.currentUser = this.users.find(user=>user.Username == username)
    console.log(this.currentUser)
  }
  SendUserInfo(){
    return this.currentUser
  }

  constructor() { }
  
}
