import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { SeasonsService } from '../../services/seasons.service';
import { faqs } from '../../interfaces/auth';

@Component({
  selector: 'app-faq-msg',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,ToastModule,CardModule,InputTextModule,ButtonModule],
  templateUrl: './faq-msg.component.html',
  styleUrl: './faq-msg.component.css'
})
export class FaqMsgComponent {

  faqform=this.fb.group({
    
    email:['',[Validators.required,Validators.email]],
    message:['',[Validators.required]]
  });
  constructor(private fb:FormBuilder ,
    private seasonservice:SeasonsService,
    private messageService: MessageService,
    private router:Router){

  }

  submitDeatils(){
    const postData=this.faqform.value
    this.seasonservice.faqMsg(postData as faqs).subscribe(
      Response=> {
        console.log(Response),
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent Successfully,we will reply of your question' });
        this.router.navigate(['home/faqs/faqs'])
      },
       error =>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'something went wrong' });

       }
      
       )
    
}

}
