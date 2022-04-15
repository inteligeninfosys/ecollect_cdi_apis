import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "notehis"
    }
  }
})
export class Notehis extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  accnumber?: string;

  @property({
    type: 'string',
  })
  custnumber?: string;

  @property({
    type: 'string',
  })
  notemade?: string;

  @property({
    type: 'string',
  })
  noteimp?: string;

  @property({
    type: 'string',
  })
  notesrc?: string;

  @property({
    type: 'string',
  })
  owner?: string;

  @property({
    type: 'date',
  })
  notedate?: string;


  constructor(data?: Partial<Notehis>) {
    super(data);
  }
}

export interface NotehisRelations {
  // describe navigational properties here
}

export type NotehisWithRelations = Notehis & NotehisRelations;
