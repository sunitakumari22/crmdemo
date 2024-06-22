import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [DialogModule,ButtonModule],
  providers: [MessageService,Injectable,ConfirmationService],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  logoutDialog: boolean = true;
  changeColor: boolean = true;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    ) { }

  ngOnInit(): void {  }
  onClickYes(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
  closeModal(){
    

  }
  onclickno():void{
    
  }
  

}
