import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  categoriesNames:any
  showNavBar:boolean=true
  constructor(private http:HttpClient) { } 
  getCategories() {
    return this.http.get(`${environment.apiUrl}/api/categories`)
  }
   getCategoriesById(id:any) {
    return this.http.get(`${environment.apiUrl}/api/categories/${id}`)
  }
  getCategoriesNames() {
    return this.http.get(`${environment.apiUrl}/api/categories/names`)
  }
  deleteCategory(id:number) {
    return this.http.delete(`${environment.apiUrl}/api/categories/delete/${id}`)
  }
  addProduct(product:any) {
    return this.http.post(`${environment.apiUrl}/api/products/add`,product, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    })
  }
  getProductById(id:any) {
    return this.http.get(`${environment.apiUrl}/api/products/product/${id}`)
  }
  deleteProduct(id:any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
     body: {
    "id": `${id}`
      }
    }
 
    return this.http.request('delete',`${environment.apiUrl}/api/products/delete`,options)
  }
  updateProduct(id: any,name: any,descripition: any,price: any,sizes: any,toppings: any,specialsAdditions: any) {

    const  body = {
      "id": `${id}`,
     // "newData": {
        name,descripition,price,sizes,toppings,specialsAdditions
     // }
    }
    return this.http.put(`${environment.apiUrl}/api/products/update`,body)
  }
  updateImage(image:FormData):Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/products/image/update`,image)
  }

}
