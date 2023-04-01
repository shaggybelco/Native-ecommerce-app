export interface IProduct {
    id: number;
    title: string;
    price:string;
    category:string
    description:string;
    rating?: any;
    image:string;
    quantity?:number;
    addedPrice?:number;
    [key: number]: string;
}