import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "excuse"
    }
  }
})
export class Excuse extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  excuse?: string;

  @property({
    type: 'string',
  })
  disabled?: string;

  @property({
    type: 'date',
  })
  lastupdate?: string;

  @property({
    type: 'string',
  })
  lastupdateby?: string;


  constructor(data?: Partial<Excuse>) {
    super(data);
  }
}

export interface ExcuseRelations {
  // describe navigational properties here
}

export type ExcuseWithRelations = Excuse & ExcuseRelations;
