import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion'; // Import MatExpansionModule
import { MatCardModule } from '@angular/material/card';
import { user } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Import FormsModule for ngModel
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sprofile',
  standalone: true,
  imports: [ MatExpansionModule,MatCardModule,MatFormFieldModule,MatButtonModule,FormsModule,CardModule,ReactiveFormsModule,CommonModule ],
  templateUrl: './sprofile.component.html',
  styleUrl: './sprofile.component.css'
})
export class SprofileComponent implements OnInit {
  // user_id=sessionStorage.getItem('id')
  constructor(private authservice:AuthService

  ){

  }
  ngOnInit(): void {
    
   
  }
  getprofiledata(){
    console.log(sessionStorage.getItem('currentUser'))
    const email=sessionStorage.getItem('email')
    this.authservice.getUserByEmail(email as string).subscribe(
      response=>{
        console.log(response)
      })
    
    
  }
 
  
  

}
