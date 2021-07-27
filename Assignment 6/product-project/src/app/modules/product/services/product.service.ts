import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

import Product from '../interface/product';

interface ServerResponse<T> {
  status: string,
  data: T
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product> {
    const url: string = `${this.apiUrl}/product`;
    return this.http.post<ServerResponse<Product>>(url, product, httpOptions)
      .pipe(
        map(data => data.data),
        catchError(this.errorHandler)
      );
  }

  getProduct(id: string): Observable<Product> {
    const url: string = `${this.apiUrl}/product/${id}`;

    return this.http.get<ServerResponse<Product>>(url)
      .pipe(
        map(data => data.data),
        catchError(this.errorHandler)
      );
  }

  getProducts(query?: string): Observable<Product []> {
    let searchParams = new HttpParams();
    if (query) searchParams = searchParams.append('query', query.trim());
    const url: string = `${this.apiUrl}/product`;

    return this.http.get<ServerResponse<Product []>>(url, {
      params: searchParams
    })
      .pipe(
        map(data => data.data),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something went wrong')
  }
}
