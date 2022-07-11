import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "payments"
    }
  }
})
export class Payments extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  accnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  custnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  custname: string;

  @property({
    type: 'string',
  })
  paymentdate?: string;

  @property({
    type: 'string',
  })
  paymentmethod?: string;

  @property({
    type: 'string',
  })
  receivedby?: string;

  @property({
    type: 'number',
  })
  paymentamount?: number;

  @property({
    type: 'number',
  })
  commission?: number;

  @property({
    type: 'number',
  })
  vat?: number;

  @property({
    type: 'string',
  })
  invoiced?: string;

  @property({
    type: 'string',
  })
  invoicenumber?: string;

  @property({
    type: 'number',
  })
  invoicedamount?: number;

  @property({
    type: 'string',
  })
  invoicesettlement?: string;

  @property({
    type: 'string',
  })
  invoicedate?: string;

  @property({
    type: 'string',
  })
  invoicedby?: string;

  @property({
    type: 'string',
  })
  settlementdate?: string;

  @property({
    type: 'date',
  })
  stagedate?: string;

  @property({
    type: 'string',
  })
  referenceno?: string;

  @property({
    type: 'string',
  })
  confirmed?: string;

  @property({
    type: 'string',
  })
  confirmedby?: string;

  @property({
    type: 'string',
  })
  confirmationdate?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Payments>) {
    super(data);
  }
}

export interface PaymentsRelations {
  // describe navigational properties here
}

export type PaymentsWithRelations = Payments & PaymentsRelations;
