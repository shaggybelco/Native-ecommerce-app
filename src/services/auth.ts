import { IProduct } from "../Interface/IProduct";
import axios, {AxiosResponse} from 'axios';

export async function getProducts(category: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.post(`https://fakestoreapi.com/auth/login`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
 
}
