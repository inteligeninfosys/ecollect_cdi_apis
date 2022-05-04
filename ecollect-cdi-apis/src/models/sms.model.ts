import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "sms"
    }
  }
})
export class Sms extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  message?: string;

  @property({
    type: 'string',
  })
  owner?: string;

  @property({
    type: 'string',
  })
  custnumber?: string;

  @property({
    type: 'string',
  })
  accnumber?: string;

  @property({
    type: 'string',
  })
  sent?: string;

  @property({
    type: 'string',
  })
  totalarrears?: string;

  @property({
    type: 'string',
  })
  telnumber?: string;

  @property({
    type: 'string',
  })
  datesent?: string;

  @property({
    type: 'date',
  })
  stagedate?: string;

  @property({
    type: 'date',
  })
  lastupdate?: string;


  constructor(data?: Partial<Sms>) {
    super(data);
  }
}

export interface SmsRelations {
  // describe navigational properties here
}

export type SmsWithRelations = Sms & SmsRelations;
