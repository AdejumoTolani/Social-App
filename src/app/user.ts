import { Post } from "./post"

export interface User {
    Name:string,
    Username:string,
    EmailAddress:string,
    Password:string,
    Online:boolean,
    Posts:Post[],
    ProfilePicture?:string
}
