 import { Injectable } from '@angular/core';
import { Product } from '../interfaces/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
      "Bamboo Watch", 
      "Black Watch", 
      "Blue Band", 
      "Blue T-Shirt", 
      "Bracelet", 
      "Brown Purse", 
      "Chakra Bracelet",
      "Galaxy Earrings",
      "Game Controller",
      "Gaming Set",
      "Gold Phone Case",
      "Green Earbuds",
      "Green T-Shirt",
      "Grey T-Shirt",
      "Headphones",
      "Light Green T-Shirt",
      "Lime Band",
      "Mini Speakers",
      "Painted Phone Case",
      "Pink Band",
      "Pink Purse",
      "Purple Band",
      "Purple Gemstone Necklace",
      "Purple T-Shirt",
      "Shoes",
      "Sneakers",
      "Teal T-Shirt",
      "Yellow Earbuds",
      "Yoga Mat",
      "Yoga Set",
  ];

  
  constructor(private http: HttpClient) { }
  private baseUrl='http://localhost:3000/products'

  getProductsSmall() {
      return this.http.get<Product[]>(`${this.baseUrl}`)
      
  }
  productdetails(userDetails:Product){
    return this.http.post(`${this.baseUrl}`,userDetails);
 }
  getproducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`);


  }

  getProducts() {
      return this.http.get<any>(`${this.baseUrl}`)
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  getProductsWithOrdersSmall() {
      return this.http.get<any>(`${this.baseUrl}`)
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  generatePrduct(): Product {
      const product: Product =  {
          id: this.generateId(),
          name: this.generateName(),
          description: "Product Description",
          price: this.generatePrice(),
          quantity: this.generateQuantity(),
          category: "Product Category",
          inventoryStatus: this.generateStatus(),
          rating: this.generateRating()
      };

      
      return product;
  }

  generateId() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
      for (var i = 0; i < 5; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      
      return text;
  }

  generateName() {
      return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generatePrice() {
      return Math.floor(Math.random() * Math.floor(299)+1);
  }

  generateQuantity() {
      return Math.floor(Math.random() * Math.floor(75)+1);
  }

  generateStatus() {
      return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  generateRating() {
      return Math.floor(Math.random() * Math.floor(5)+1);
  }

  saveProduct(postData:any,modaltype:string){
    if(modaltype==='Add'){
        return this.http.post('http://localhost:3000/products',postData);
    }
    else{
        return this.http.put(`http://localhost:3000/products/${postData.id}`,postData)
    }
    
  }
  deleteProduct(productId:any){
    return this.http.delete(`http://localhost:3000/products/${productId}`);

  }
}
