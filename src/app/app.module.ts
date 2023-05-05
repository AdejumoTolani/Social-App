import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { PostsComponent } from './Components/posts/posts.component';
import { MessageComponent } from './Components/message/message.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';
import { LoginComponent } from './Components/Landing/login/login.component';
import { RegisterComponent } from './Components/Landing/Register/register.component';
import { LandingComponent } from './Components/Landing/landing.component';
import { MainComponent } from './Components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    MessageComponent,
    HeaderComponent,
    AddPostComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
