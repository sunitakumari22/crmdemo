import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

 
  private baseUrl='http://localhost:3000/users'

  constructor( private http:HttpClient) { }

  resisterUser(userDetails:user){
     return this.http.post(`${this.baseUrl}`,userDetails);
  }
  getUserByEmail(email:string):Observable<user[]>{
    
    return this.http.get<user[]>(`${this.baseUrl}?email=${email}`);


  }

  logout() {

    
}


}
