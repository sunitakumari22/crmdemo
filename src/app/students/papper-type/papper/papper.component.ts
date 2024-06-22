import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { StudentService } from '../../../services/student.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-papper',
  standalone: true,
  imports: [ButtonModule,DialogModule,ReactiveFormsModule,CardModule,InputTextModule,ToastModule],
  templateUrl: './papper.component.html',
  styleUrl: './papper.component.css'
})
export class PapperComponent {
  @Input() displayAddModal :boolean=true;
  @Input() selectedproduct:any=null
  @Output() clickclose:EventEmitter<boolean>= new EventEmitter<boolean>();
  modaltype="Add"
  productForm=this.fb.group({
      id:["",Validators.required],
      code:["",Validators.required],
      name:["",Validators.required],
      category:["",Validators.required],
      quantity:["",Validators.required]

  })
  constructor(private fb:FormBuilder ,private studentservice:StudentService,private messageservice:MessageService){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.selectedproduct){
      this.modaltype='Edit';
      this.productForm.patchValue(this.selectedproduct)
    }
    else{
      this.productForm.reset();
      this.modaltype='Add';
    }
  }
  ngOnInit(): void {
    
  }

  closeModal(){
    this.clickclose.emit(true);

  }
  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
  addproduct(){
    console.log(this.productForm.value)
    this.studentservice.saveProduct(this.productForm.value,this.modaltype).subscribe(
      response=>{
        console.log(response);
        this.messageservice.add({ severity:'success', summary: 'Added', detail: 'Successfully'});
        this.productForm.reset();
        this.clickclose.emit(true);
      },
      
      
    )

  }

}
