//TODO convert to enum api side
export type Locale = 'en' | 'es' | 'it' | 'ru';
export const Locales: Locale[] = ['en', 'es', 'it', 'ru'];
export const Sites = ['bc', '18sound', 'ciare'];
export type Site = 'bc' | '18sound' | 'ciare';
export type Modules =
  | 'quotes'
  | 'logistics'
  | 'administration'
  | 'order'
  | 'quote'
  | 'lead'
  | 'client'
  | 'dashboard'
  | 'warehouse'
  | 'user'
  | 'product'
  | 'cms'
  | 'magazine'
  | 'distributors'
  | 'calendar';
export const Modules = [
  'quotes',
  'logistics',
  'administration',
  'order',
  'quote',
  'lead',
  'client',
  'dashboard',
  'warehouse',
  'user',
  'product',
  'cms',
  'magazine',
  'distributors',
  'calendar',
];
export type ProductComponents =
  | 'lf'
  | 'hf'
  | 'mf'
  | 'horn'
  | 'crossover'
  | 'params';
export const ProductComponents = [
  'lf',
  'hf',
  'mf',
  'horn',
  'crossover',
  'params',
];
