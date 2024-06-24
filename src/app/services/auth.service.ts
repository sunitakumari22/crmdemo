import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email:string;

  userdata=sessionStorage.getItem('currentuser');
  private baseUrl='http://localhost:3000/users'

  constructor( private http:HttpClient) {
    this.email = sessionStorage.getItem('email')|| 'Guest';
   }

  resisterUser(userDetails:user){
     return this.http.post(`${this.baseUrl}`,userDetails);
  }
  getUserByEmail(email:string):Observable<user[]>{
    
    return this.http.get<user[]>(`${this.baseUrl}?email=${email}`);
  }

  getdataprofile(email:string):Observable<user[]>{
    return this.http.get<user[]>(`${this.baseUrl}?email=${email}`);

  }
  getregisterUser(user_id:any){
    return this.http.get<user[]>('http://localhost:3000/users/?id='+user_id,)
      // .subscribe((result)=>{
      //   console.warn(result)
      //   if(result && result.body){
      //     this.userdata.emit(result.body)
      //   }
      // });
 }
//  updateregisteruser(user_id:any,user_dto:any):Observable<user[]>{
//   return this.http.put<user[]>('http://localhost:3000/users',user_id+user_dto);


//  }

  


}
