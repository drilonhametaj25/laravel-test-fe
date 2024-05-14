import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { config, ApiConfig } from '@app/environments/environment';

export interface BodyDataInterface {
  [x: string]: any;
}
export interface FullPathInterface {
  basePath: string;
  url: string;
}

type GetApiRequestInterface = (
  relativePath: string | FullPathInterface,
  options?: any
) => Observable<any>;
type PostApiRequestInterface = (
  relativePath: string | FullPathInterface,
  data: BodyDataInterface,
  options?: any
) => Observable<any>;
type PatchApiRequestInterface = (
  relativePath: string | FullPathInterface,
  data: BodyDataInterface,
  options?: any
) => Observable<any>;
type PutApiRequestInterface = (
  relativePath: string | FullPathInterface,
  data: BodyDataInterface,
  options?: any
) => Observable<any>;
type DeleteApiRequestInterface = (
  relativePath: string | FullPathInterface,
  options?: any
) => Observable<any>;

export interface ApiRequestInterface {
  get: GetApiRequestInterface;
  post: PostApiRequestInterface;
  patch: PatchApiRequestInterface;
  put: PutApiRequestInterface;
  delete: DeleteApiRequestInterface;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService implements ApiRequestInterface {
  apiConfig: ApiConfig | undefined = config.api;
  locale: string = '';

  constructor(private http: HttpClient) {}

  setLocale(locale: string): ApiService {
    this.locale = locale;
    return this;
  }

  private interpolatesLocale(url: string): string {
    if (this.locale && url.indexOf('{{locale}}') >= 0) {
      return url.replace('{{locale}}', this.locale);
    } else {
      return url;
    }
  }

  private request(
    method: string,
    url: string | FullPathInterface,
    options: any = {}
  ): Observable<any> {
    let requestUrl = '';
    if (typeof url === typeof '') {
      requestUrl = `${this.apiConfig?.fullPath}${url}`;
    } else {
      requestUrl = `${(url as FullPathInterface).basePath}${
        (url as FullPathInterface).url
      }`;
    }
    let params = {};
    if (options && options.params) {
      Object.keys(options.params).forEach((p) => {
        if (undefined !== options.params[p]) {
          // @ts-ignore
          params[p] = options.params[p];
        }
      });
    }
    options.params = params;
    return this.http.request<any>(
      method,
      this.interpolatesLocale(requestUrl),
      Object.assign(
        {
          withCredentials: true,
        },
        options
      )
    );
  }

  get(url: string | FullPathInterface, options?: Object): Observable<any> {
    return this.request('GET', url, options);
  }

  post(
    url: string | FullPathInterface,
    body: any,
    options: Object = {}
  ): Observable<any> {
    return this.request('POST', url, Object.assign(options, { body }));
  }

  patch(
    url: string | FullPathInterface,
    body: any,
    options: Object = {}
  ): Observable<any> {
    return this.request('PATCH', url, Object.assign(options, { body }));
  }

  put(
    url: string | FullPathInterface,
    body: any,
    options: Object = {}
  ): Observable<any> {
    return this.request('PUT', url, Object.assign(options, { body }));
  }

  delete(
    url: string | FullPathInterface,
    options: Object = {}
  ): Observable<any> {
    return this.request('DELETE', url, options);
  }
}
