import axios from "axios";
import { serverURL } from "../constant/constant";

export async function LoginUser(data: any) {
  console.log(data);

  return axios.post(`${serverURL}/login`, data);
}

export async function RegisterUser(data: any) {
  console.log(data);

  return axios.post(`${serverURL}/register`, data);
}
