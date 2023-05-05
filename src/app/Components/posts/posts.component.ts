import { Component, ElementRef } from '@angular/core';
import { Post } from 'src/app/post';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  Posts:Post[]=[]
  loadMe: boolean = true
  emojis:string = '❤🧡💛❣💓💖'
  likes = document.getElementsByClassName('likes')
    constructor(private userService:UserService){
      if(this.loadMe == true){
      this.Posts = this.userService.ShowPosts();
      }
    }
    
    onLike(post:Post, i:number){
        if(this.likes[i].innerHTML == '💖'){
              this.likes[i].innerHTML = '🤍';
              this.userService.UnlikePost(post);
    }
    else if(this.likes[i].innerHTML == '🤍'){
            this.userService.LikePost(post);
            this.likes[i].innerHTML = '💖'
      }
      
    }
    onRepost(){}
    onFav(){}

}

