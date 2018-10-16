import { Observable } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApi } from '../../../shared/core/base-api';
import { MyEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseApi {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
   }

   addEvent(event: MyEvent): Observable<MyEvent> {
      return this.post('events', event);
   }
}
