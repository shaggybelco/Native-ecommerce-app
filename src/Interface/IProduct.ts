export interface IProduct {
    id: number;
    title: string;
    price:string;
    category:string
    description:string;
    rating?: any;
    image:string;
    [key: number]: string;
}