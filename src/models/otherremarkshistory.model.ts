import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "otherremarkshistory"
    }
  }
})
export class Otherremarkshistory extends Entity {
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
  otherremarks?: string;

  @property({
    type: 'string',
  })
  owner?: string;

  @property({
    type: 'date',
  })
  datemade?: string;


  constructor(data?: Partial<Otherremarkshistory>) {
    super(data);
  }
}

export interface OtherremarkshistoryRelations {
  // describe navigational properties here
}

export type OtherremarkshistoryWithRelations = Otherremarkshistory & OtherremarkshistoryRelations;
