export enum UserRoles {
  admin = "admin",
  agente = "agente",
  administration = "administration",
  dipendente = "dipendente",
  warehouse = "warehouse",
  product = "product",
  lead = "lead",
  client = "client",
  order = "order",
  acquisti = "acquisti",
  quotes = "quotes", // Preventivi
  calendar = "calendar",
  logistics = "logistics"
}

export const userRolesObject = [
  {value: 'admin', name: 'Admin'},
  {value: 'agente', name: 'Agente'},
  {value: 'dipendente', name: 'Dipendente'},
  {value: 'warehouse', name: 'Magazzino'},
  {value: 'prodotti', name: 'Prodotti'},
  {value: 'lead', name: 'Lead'},
  {value: 'client', name: 'Clienti'},
  {value: 'order', name: 'Ordini'},
  {value: 'acquisti', name: 'Acquisti'},
  {value: 'quotes', name: 'Preventivi'},
  {value: 'calendar', name: 'Calendario'},
  {value: 'logistics', name: 'Logistica'},
]

export interface UserInterface {
  _id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  password?: string;
  passwordConfirmation?: string;
  roles: [UserRoles];
  hash: string;
  refreshToken: string;
  refreshTokenExpiry: Date;
}
