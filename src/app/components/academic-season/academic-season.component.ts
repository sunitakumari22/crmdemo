import { Component, NgModule } from '@angular/core';
import { Product } from '../../interfaces/auth';
import { SeasonsService } from '../../services/seasons.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormBuilder, FormsModule,  NonNullableFormBuilder,  Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';

import {DialogModule} from 'primeng/dialog';
import { AddEditModuleModule } from './add-edit-module/add-edit-module.module';
import { AddEditModuleComponent } from './add-edit-module/add-edit-module.component';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FileUploadModule} from 'primeng/fileupload';



// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';








@Component({
  selector: 'app-academic-season',
  standalone: true,
  imports: [HttpClientModule ,TableModule,ButtonModule,DialogModule,ConfirmDialogModule,
    AddEditModuleModule,AddEditModuleComponent,CardModule,ToastModule,FileUploadModule],
  providers: [MessageService,NgModule,ConfirmationService],
  templateUrl: './academic-season.component.html',
  styleUrl: './academic-season.scss'
})
export class AcademicSeasonComponent {

// submitDeatils() {
// throw new Error('Method not implemented.');
// }
  products:Product[]=[];
  displayAddModal=false;
  selectedProduct:any=null;
  product: Product | undefined;

    selectedProducts: Product[] | undefined;

    submitted: boolean | undefined;
  productDialog: boolean | undefined;
  loading: boolean = true;
 
  constructor(private sessionservice:SeasonsService,private confirmationservice:ConfirmationService,private messageservice:MessageService) { }

  ngOnInit():void {
     this.getproductlist()
  }
  getproductlist() {
    this.sessionservice.getproducts().subscribe(
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
          this.sessionservice.deleteProduct(product.id).subscribe(
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
