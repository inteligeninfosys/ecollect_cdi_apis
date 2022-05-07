import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "ptps"
    }
  }
})
export class Ptps extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  ptpid?: string;

  @property({
    type: 'string',
  })
  accnumber?: string;

  @property({
    type: 'string',
  })
  custnumber?: string;

  @property({
    type: 'number',
  })
  ptpamount?: number;

  @property({
    type: 'string',
  })
  ptpdate?: string;

  @property({
    type: 'string',
  })
  owner?: string;
  
  @property({
    type: 'string',
  })
  met?: string;

  @property({
    type: 'string',
  })
  paymethod?: string;

  @property({
    type: 'date',
  })
  stagedate?: string;

  @property({
    type: 'string',
  })
  ptpdate2?: string;

  @property({
    type: 'string',
  })
  ammendcomment?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ptps>) {
    super(data);
  }
}

export interface PtpsRelations {
  // describe navigational properties here
}

export type PtpsWithRelations = Ptps & PtpsRelations;
