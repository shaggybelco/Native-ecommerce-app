import { IProduct } from "../Interface/IProduct";
import axios, {AxiosResponse} from 'axios';

export async function getProducts(category: string): Promise<IProduct[]> {
  try {
    const response: AxiosResponse<IProduct[]> = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
 
}
