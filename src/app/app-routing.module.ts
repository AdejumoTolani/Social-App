import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './Components/posts/posts.component';
import { MessageComponent } from './Components/message/message.component';
import { HomeComponent } from './Components/home/home.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { LandingComponent } from './Components/Landing/landing.component';
import { RegisterComponent } from './Components/Landing/Register/register.component';
import { LoginComponent } from './Components/Landing/login/login.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  {path: '', component:LandingComponent, children:[
    {path:'Register', component:RegisterComponent},
    {path:'Login', component:LoginComponent},
  ]},
  
  {path:'main', component:MainComponent, children:[
    {path:'show', component:PostsComponent},
    {path:'message', component:MessageComponent},
    {path:'home', component:HomeComponent},
  ]},
  
  {path:'addPost', component:AddPostComponent},
  
  {path:'**', component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
