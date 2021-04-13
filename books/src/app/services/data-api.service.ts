import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getAllBooks(): any{
    const urlApi = 'http';
    return this.http.get(urlApi);
  }
}
