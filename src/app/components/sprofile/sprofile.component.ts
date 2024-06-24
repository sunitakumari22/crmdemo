import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion'; // Import MatExpansionModule
import { MatCardModule } from '@angular/material/card';
import { user } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Import FormsModule for ngModel

import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';


import { HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
@Component({
  selector: 'app-sprofile',
  standalone: true,
  imports: [ MatExpansionModule,MatCardModule,MatFormFieldModule,MatButtonModule,FormsModule,CardModule,
    ReactiveFormsModule,CommonModule ,ToastModule,ToolbarModule],
  templateUrl: './sprofile.component.html',
  styleUrl: './sprofile.component.css'
})
export class SprofileComponent implements OnInit {
 
  
//  user!: [
//     name:[''],
//     email: [''],
//     mobile:['']
//   ];
  users: user[]=[]; 
  email: string;
studentProfileSearchGroup: FormGroup<any> | undefined;
  
  constructor(private authservice:AuthService,private httpclient:HttpClient){
    this.email = sessionStorage.getItem('email')|| 'Guest';
  }

  ngOnInit() {
    this.saveProfile();
  }

  saveProfile() {
    const email=sessionStorage.getItem('email')
    
    this.authservice.getdataprofile(email as string).subscribe(result=>{
      console.log(result);
      this.users=result
      
      

      
    })
   
   
  }


 
  
  

}
