import { Observable } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseApi } from '../../../shared/core/base-api';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseApi {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
   }

   addCategory(category: Category): Observable<Category> {
     return this.post('categories', category);
   }
}
