export enum ProductStatus {
  publish = 'publish',
  draft = 'draft',
}

export enum ProductType {
  variable = 'variable',
  simple = 'simple',
  digital = 'digital',
}

export enum ProductUnitOfMeasure {
  metro = 'metro',
  litro = 'litro',
  grammo = 'grammo',
  kg = 'kg',
  pezzo = 'pezzo',
}

export interface ProductInterface {
  _id: string;
  sku: string;
  name: string;
  ufm: ProductUnitOfMeasure; // unità di misura
  price: number;
  only_one: boolean;
  min_stock?: number;
  description?: string;
  website_stock?: number;
  stock?: string; // Without website_stock
  status: ProductStatus;
  bar_code?: string;
  qr_code?: string;
  img: string;
  category: [string]; // TODO fix this with categoryType
  product_type: ProductType;
  weight?: number;
  sizes?: {
    l: number;
    l2: number;
    h: number;
  };
  attribute_variations?: [
    {
      key: string;
      values: [string];
    }
  ];
  variations?: [
    {
      attributes: [string];
      product: ProductInterface;
    }
  ];
}
