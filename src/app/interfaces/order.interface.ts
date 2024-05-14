export enum OrderStatus {
  init = 'Inserito',
  working = 'In Lavorazione',
  done = 'Concluse'
}

export interface OrderedProductInterface {
  product: string,
  quantity: number,
  price: number,
  totalProductPrice: number
}

export interface OrderInterface {
  _id: string;
  client: string;
  address: string;
  products: OrderedProductInterface[]
  totalOrderPrice: Number;
  status: OrderStatus
  order_date: Date;
  shipping_date: Date;
  delivery_date: Date;
  note: string
}
