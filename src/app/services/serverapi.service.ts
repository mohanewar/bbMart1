import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerapiService {

  constructor(private http: HttpClient) { }
  apiUrl ='http://localhost:3000/api/v1/'
  login(email: any, password: any): Observable<any> {
    // let response = this.http.post(this.apiUrl + 'login', { email, password });
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.apiUrl + 'login', { email, password }, {
      headers: httpHeaders,
      responseType: 'json'
    });

  }
  addNewUser(email: any, password: any,userName:any): Observable<any> {
    // let response = this.http.post(this.apiUrl + 'login', { email, password });
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.apiUrl + 'addNewUser', { email, password, userName }, {
      headers: httpHeaders,
      responseType: 'json'
    });
    

  }
  uploadProducts(model:any): Observable<any> {
    // let response = this.http.post(this.apiUrl + 'login', { email, password });
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.apiUrl + 'uploadProducts', model, {
      headers: httpHeaders,
      responseType: 'json'
    });


  }
  getProductList(): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.apiUrl + 'getProductList', {
      headers: httpHeaders,
      responseType: 'json'
    });
  }
  updateProducts(model:any):Observable<any>{
    let httpHeaders=new HttpHeaders().set('content-type','application/json')
    return this.http.post(this.apiUrl + 'updateProducts',model,{
      headers:httpHeaders,
      responseType:'json'
    })
  }
  deleteProduct(uniqueId: any): Observable<any> {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json')
    return this.http.post(this.apiUrl + 'deleteProduct', uniqueId, {
      headers: httpHeaders,
      responseType: 'json'
    })
  }
}
