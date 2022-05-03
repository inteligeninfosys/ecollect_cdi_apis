import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "excusedetailed"
    }
  }
})
export class Excusedetailed extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  excuseid?: number;

  @property({
    type: 'string',
  })
  excusedetails?: string;

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


  constructor(data?: Partial<Excusedetailed>) {
    super(data);
  }
}

export interface ExcusedetailedRelations {
  // describe navigational properties here
}

export type ExcusedetailedWithRelations = Excusedetailed & ExcusedetailedRelations;
