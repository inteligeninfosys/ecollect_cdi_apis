import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "commissions"
    }
  }
})
export class Commissions extends Entity {
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
  bankid: string;

  @property({
    type: 'number',
  })
  upperlimit?: number;

  @property({
    type: 'number',
  })
  lowerlimit?: number;

  @property({
    type: 'string',
  })
  parameter?: string;

  @property({
    type: 'string',
  })
  lastupdated?: string;

  @property({
    type: 'string',
  })
  lastupdatedby?: string;

  @property({
    type: 'number',
  })
  commission?: number;

  @property({
    type: 'number',
  })
  vat?: number;

  @property({
    type: 'date',
  })
  lastupdate?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Commissions>) {
    super(data);
  }
}

export interface CommissionsRelations {
  // describe navigational properties here
}

export type CommissionsWithRelations = Commissions & CommissionsRelations;
