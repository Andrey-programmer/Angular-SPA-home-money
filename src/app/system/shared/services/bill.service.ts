import { Observable } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../models/bill.model';

@Injectable(/* {
  providedIn: 'root'
} */)
export class BillService {

  constructor(private httpClient: HttpClient) { }

  getBill(): Observable<Bill> {
    return this.httpClient.get<Bill>('http://localhost:3000/bill', {
      responseType: 'json'
    });
  }

  getCurrency(): Observable<any> {
    return this.httpClient.get('https://www.cbr-xml-daily.ru/daily_json.js', {
      responseType: 'json'
    }).map((curs) => curs);
  }
}
