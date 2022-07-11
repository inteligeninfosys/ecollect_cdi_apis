import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "teles"
    }
  }
})
export class Teles extends Entity {
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
  loanaccount: string;

  @property({
    type: 'string',
    required: true,
  })
  contactnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  contactname: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  active?: string;

  @property({
    type: 'string',
  })
  updatedby?: string;

  @property({
    type: 'date',
  })
  lastupdate?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Teles>) {
    super(data);
  }
}

export interface TelesRelations {
  // describe navigational properties here
}

export type TelesWithRelations = Teles & TelesRelations;
