export interface user {
    
    name:string;
    mobile:string;
    email:string;
    password:string
}
export interface Product {
    id?:string;
    code?:string;
    name?:string;
    description?:string;
    price?:number;
    quantity?:number;
    inventoryStatus?:string;
    category?:string;
    image?:string;
    rating?:number;
}

export interface faqs {
    
    question:string;
    answer:string;
}
