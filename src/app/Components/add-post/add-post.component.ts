import { Component } from '@angular/core';
import { Post } from 'src/app/post';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
    constructor(private userService:UserService){}
    addedPost:Post = {Post: '',likes:0};
    onAdd(){
      if(this.addedPost.Post.length > 0){

        this.userService.AddPost(this.addedPost)
      }
    }
}
