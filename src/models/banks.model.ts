import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "banks"
    }
  }
})
export class Banks extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  bankid: string;

  @property({
    type: 'string',
    required: true,
  })
  bankname: string;

  @property({
    type: 'string',
    required: true,
  })
  emailaddress: string;

  @property({
    type: 'string',
  })
  telnumber?: string;

  @property({
    type: 'string',
  })
  startdate?: string;

  @property({
    type: 'string',
  })
  lastupdated?: string;

  @property({
    type: 'string',
  })
  lastupdatedby?: string;

  @property({
    type: 'date',
  })
  lastupdate?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Banks>) {
    super(data);
  }
}

export interface BanksRelations {
  // describe navigational properties here
}

export type BanksWithRelations = Banks & BanksRelations;
