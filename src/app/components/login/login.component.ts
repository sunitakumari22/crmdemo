import { Component, Injectable } from '@angular/core';
import { FormBuilder,  ReactiveFormsModule, Validators } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {FloatLabelModule } from 'primeng/floatlabel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { provideHttpClient,withInterceptors } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,RouterLink,NgIf,
    HttpClientModule,ToastModule ,CommonModule
  ],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  });
  constructor(private fb:FormBuilder,
    private authservice:AuthService, 
    private messageservice:MessageService,
    private router:Router ,
    
    ){

  }
  get email(){
     return this.loginform.controls['email'];

  }
  get Password(){
    return this.loginform.controls['password'];

 }
 loginuser(){
  const{email,password}=this.loginform.value;
  this.authservice.getUserByEmail(email as string).subscribe(
    response=>{
      if(response.length>0&& response[0].password === password){
        sessionStorage.setItem('email',email as string);
        localStorage.setItem('currentUser', JSON.stringify(response));

        // localStorage.setItem('lastLoggedInUser', JSON.stringify({ displayImageUrl: response.applicationUser.displayImageUrl , userName: response.applicationUser.userName }));
        console.log('succesfully login')
        this.messageservice.add({ severity:'success', summary: 'success', detail: ' Login Successfully'});
        this.router.navigate(['/home']);
      }
      else{
        this.messageservice.add({ severity:'error', summary: 'error', detail: 'email or password is wrong'});
        this.loginform.reset();
        this.router.navigate(['/login']);
      }
       }
      //  error=>{
      //   this.messageservice.add({ severity:'error', summary: 'error', detail: 'email or password is wrong'});
      //   this.loginform.reset();
      //   this.router.navigate(['/login']);

      //  }
    
  )

 }


}
