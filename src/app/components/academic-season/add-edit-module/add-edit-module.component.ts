import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SeasonsService } from '../../../services/seasons.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-edit-module',
  standalone: true,
  imports: [ButtonModule,DialogModule,ReactiveFormsModule,CardModule,InputTextModule,ToastModule],
  templateUrl: './add-edit-module.component.html',
  styleUrl: './add-edit-module.component.css'
})
export class AddEditModuleComponent implements OnInit ,OnChanges {
loginuser() {
throw new Error('Method not implemented.');
}
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
  constructor(private fb:FormBuilder ,private seasonservice:SeasonsService ,private messageservice:MessageService){

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
  addproduct(){
    console.log(this.productForm.value)
    this.seasonservice.saveProduct(this.productForm.value,this.modaltype).subscribe(
      response=>{
        console.log(response);
        this.messageservice.add({ severity:'success', summary: 'Added', detail: 'Successfully'});
        this.productForm.reset();
        this.clickclose.emit(true);
      },
      
      
    )

  }
   

}
