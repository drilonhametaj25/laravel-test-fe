export interface LeadInterface {
  _id: string;
  ragione_sociale: string;
  name: string;
  surname: string;
  email: string;
  address: string;
  contacts: string;
  pi: string;
  cf: string;
  note: string;
  website: string;
  macro_category: string;
  category: string;
  orari: {
    lunedi:[
      {
        from: Date,
        to: Date
      }
    ],
    martedi:[
      {
        from: Date,
        to: Date
      }
    ],
    mercoledi:[
      {
        from: Date,
        to: Date
      }
    ],
    giovedi:[
      {
        from: Date,
        to: Date
      }
    ],
    venerdi:[
      {
        from: Date,
        to: Date
      }
    ],
    sabato:[
      {
        from: Date,
        to: Date
      }
    ],
    domenica:[
      {
        from: Date,
        to: Date
      }
    ]
  }
}
