import { IProduct } from "../Interface/IProduct";
import axios, { AxiosResponse } from "axios";
import db from '../database/database';

export async function LoginUser(data: any) {
    console.log(data);
    
  try {
    const response: AxiosResponse<any> = await axios.post(
      `https://fakestoreapi.com/auth/login`,
      {
        data,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function RegisterUser(data: any) {
    console.log(data);
    
  try {
    const response: AxiosResponse<any> = await axios.post(
      `https://fakestoreapi.com/users`,
      {
        data,
      }
    );
    return response.data;
  }catch (error) {}
}
