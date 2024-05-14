export interface ApiResponseInterface {
  data: any,
  status: string,
  message: string,
  count?: number,
  limit?: number,
  [x: string| number| symbol]: any,
}
