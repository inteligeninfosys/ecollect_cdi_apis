import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "vendorcommentshistory"
    }
  }
})
export class Vendorcommentshistory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  loanaccount?: string;

  @property({
    type: 'string',
  })
  vendorcomments?: string;

  @property({
    type: 'string',
  })
  owner?: string;

  @property({
    type: 'date',
  })
  datemade?: string;


  constructor(data?: Partial<Vendorcommentshistory>) {
    super(data);
  }
}

export interface VendorcommentshistoryRelations {
  // describe navigational properties here
}

export type VendorcommentshistoryWithRelations = Vendorcommentshistory & VendorcommentshistoryRelations;
