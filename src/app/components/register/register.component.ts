import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule,  Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {ReactiveFormsModule,  } from '@angular/forms';


import {  FloatLabelModule } from 'primeng/floatlabel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { user } from '../../interfaces/auth';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';

import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule,
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,RouterLink,NgIf ,FormsModule,HttpClientModule,ToastModule,
    RippleModule,CommonModule
    ],
    
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerform=this.fb.group({
    name:['',Validators.required],
    mobile:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  });

 
  constructor(private fb:FormBuilder ,
    private authservice:AuthService,
    private messageService: MessageService,
    private router:Router){

  }
  ngOnInit(): void {
    
  }
  get email(){
     return this.registerform.controls['email'];

  }
  get Password(){
    return this.registerform.controls['password'];

 }
 get name(){
  return this.registerform.controls['email'];
 }
  get mobile(){
    return this.registerform.controls['email'];

 
}
submitDeatils(){
      const postData=this.registerform.value
      this.authservice.resisterUser(postData as user).subscribe(
        Response=> {
          console.log(Response),
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register Successfully' });
          this.router.navigate(['login'])
        },
         error =>{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'something went wrong' });

         }
        
         )
      
}

}
