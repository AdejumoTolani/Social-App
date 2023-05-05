import { Injectable } from '@angular/core';
import { Post } from "../app/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  Posts:Post[] = [
    {Post:"Hello There at 0!", likes:0},
    {Post:"Hello There at 1!", likes:0},
    {Post:"Hello There at 2!", likes:0},
    {Post:"Hello There at 3!", likes:0},
    {Post:"Hello There at 4!", likes:0},

  ]
 
  AddPost(newPost:Post){
      this.Posts.push(newPost);
  }
  DeletePost(postId:number){
    this.Posts.splice(postId,1);
  }
  ShowPosts(){
    return this.Posts
  }
  LikePost(post:Post){
    post.likes ++;
  }
  UnlikePost(post:Post){
    post.likes--;
  }
  
}
