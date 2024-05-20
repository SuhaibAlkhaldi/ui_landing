import HttpClient from "../helper/HttpClient";

const url = "http://localhost:5184/api/BackOfficeB2B"
export const FindSystem = (obj)=>{
const {avgConsmptionPerYear} = obj;
return HttpClient.post(`${url}/Product/FindSystem`, {avgConsmptionPerYear});
}

export const GetAllProducts = ()=>{
return HttpClient.get(`${url}/Product/GetAllProducts`);
}
export const GetProductById = (id)=>{
return HttpClient.get(`${url}/Product/${id}`);
}
