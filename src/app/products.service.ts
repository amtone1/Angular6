import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url: string = "assets/productName.json";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(this._url);
  }
}
