import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Item } from '../../../item/itemInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  apiUrl: string = 'http://localhost:3000/items';

  constructor(private http:HttpClient) { }

  getAllDate(): Observable <Item[]>{
    return this.http.get<Item[]>(this.apiUrl);
  }

  deleteDate(id:number): Observable <Item>{
    return this.http.delete<Item>(`${this.apiUrl}/${id}`);
  }

  createItem(item: Item): Observable <Item>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Item>(this.apiUrl, item, {headers});
  }

  updateItem(item: Item, id:string): Observable <Item>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put<Item>(`${this.apiUrl}/${id}`, item, {headers});
  }
}
