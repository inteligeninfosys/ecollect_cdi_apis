import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "tqall"
    }
  }
})

export class Tqall extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  accnumber: string;

  @property({
    type: 'string',
  })
  custnumber?: string;

  @property({
    type: 'string',
  })
  custname?: string;

  @property({
    type: 'string',
  })
  currency?: string;

  @property({
    type: 'number',
    default: 0,
  })
  totalarrears?: number;

  @property({
    type: 'number',
    default: 0,
  })
  oustbalance?: number;

  @property({
    type: 'number',
  })
  daysinarr?: number;

  @property({
    type: 'string',
  })
  origdate?: string;

  @property({
    type: 'number',
  })
  origbalance?: number;

  @property({
    type: 'number',
  })
  interestrate?: number;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  postalcode?: string;

  @property({
    type: 'string',
  })
  emailaddress?: string;

  @property({
    type: 'string',
  })
  telnumber?: string;

  @property({
    type: 'string',
  })
  celnumber?: string;

  @property({
    type: 'string',
  })
  productcode?: string;

  @property({
    type: 'string',
  })
  institution?: string;

  @property({
    type: 'string',
  })
  colofficer?: string;

  @property({
    type: 'string',
  })
  receiveddate?: string;

  @property({
    type: 'string',
  })
  returndate?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'Date',
  })
  lastupdate?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tqall>) {
    super(data);
  }
}

export interface TqallRelations {
  // describe navigational properties here
}

export type TqallWithRelations = Tqall & TqallRelations;
