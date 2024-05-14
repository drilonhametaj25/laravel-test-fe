import { Injectable } from '@angular/core';
import { ApiResponseInterface } from '@app/app/interfaces/api-response';
import { UserInterface } from '@app/app/interfaces/user.interface';
import { ApiService } from '@app/app/services/api.service';
import { Page } from '@app/app/utils/page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewieriesService {

  basePath = '/breweries'

  constructor(protected apiService: ApiService) {
  }

  addNew(data: object): Observable<ApiResponseInterface>{
    return this.apiService.post(`${this.basePath}/`, {data})
  }

  update(data: object, id:string): Observable<ApiResponseInterface>{
    return this.apiService.patch(`${this.basePath}/${id}`, {data})
  }

  get(id:string): Observable<ApiResponseInterface>{
    return this.apiService.get(`${this.basePath}/${id}`)
  }

  list(data: any, params: Page): Observable<ApiResponseInterface> {
    return this.apiService.post(`${this.basePath}/data?start=${params.pageNumber}&length=${params.size}`, {length: params.size, start: params.pageNumber, search: data.search || null})
  }

  delete(id:string): Observable<ApiResponseInterface>{
    return this.apiService.delete(`${this.basePath}/${id}`)
  }

}
