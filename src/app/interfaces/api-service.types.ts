import { Observable } from "rxjs";
import { Site } from "../constants";

type IndexApiServiceInterface<T> = (params?: Object, site?:Site) => Observable<T>;
type GetApiServiceInterface<T> = (id: string, site?: Site) => Observable<T>;
type UpdateApiServiceInterface<T> = (
  id: string,
  body: any,
  site?: Site
) => Observable<T>;
type DestroyApiServiceInterface<T> = (id: string, site?: Site) => Observable<T>;
type CreateApiServiceInterface<T> = (body: any, site?: Site) => Observable<T>;
type ResourceApiServiceInterface<T> = (
  body: any,
  params?: any,
  site?: Site
) => Observable<T>;
type SearchApiServiceInterface<T> = (
  keyword: string,
  limit?: number,
  body?: any,
  site?: Site
) => Observable<T>;

export interface ApiServiceInterface<T> {
  index: IndexApiServiceInterface<Array<T>>;
  get: GetApiServiceInterface<T>;
  update: UpdateApiServiceInterface<T>;
  destroy: DestroyApiServiceInterface<T>;
  create: CreateApiServiceInterface<T>;
  resource: ResourceApiServiceInterface<T>;
  search: SearchApiServiceInterface<T>;
}
