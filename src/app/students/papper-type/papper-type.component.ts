import { Component, NgModule, SimpleChanges } from '@angular/core';
import {TableModule} from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { Product } from '../../interfaces/auth';


import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';




import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';

import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { PapperComponent } from "./papper/papper.component";


@Component({
    selector: 'app-papper-type',
    standalone: true,
    templateUrl: './papper-type.component.html',
    providers: [MessageService, NgModule, ConfirmationService],
    styleUrl: './papper-type.component.css',
    imports: [TableModule, ButtonModule, DialogModule, ReactiveFormsModule, CardModule, InputTextModule, ToastModule, CommonModule, FormsModule, ConfirmDialogModule, PapperComponent]
})
export class PapperTypeComponent {
  products:Product[]=[];
  displayAddModal=false;
  selectedProduct:any=null;
  product: Product | undefined;

    selectedProducts: Product[] | undefined;

    submitted: boolean | undefined;
  productDialog: boolean | undefined;
  loading: boolean = true;
 
  constructor(private studentservice:StudentService,private confirmationservice:ConfirmationService,private messageservice:MessageService) { }

  ngOnInit():void {
     this.getproductlist()
  }
  getproductlist() {
    this.studentservice.getproducts().subscribe(
      Response=>{
        this.products=Response;
      }
    )
  }
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
}
  showaddmodal(){
    this.displayAddModal=true;

  }
  hideAddModal(isClosed:boolean){
    this.displayAddModal=!isClosed;

  }
 





hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}



findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
showeditProduct(product:Product) {
    this.displayAddModal=true;
    this.selectedProduct=product;
  
  }
  deleteProduct(product:Product){
    this.confirmationservice.confirm({
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.studentservice.deleteProduct(product.id).subscribe(
            response=>{
              this.getproductlist()
              this.messageservice.add({ severity:'success', summary: 'Deleted', detail: ' Deleted Successfully'});

            },
            error=>{
              this.messageservice.add({ severity:'error', summary: 'error', detail: 'somthing went wrong'});
            }
          )
      }
  });


  }

}
