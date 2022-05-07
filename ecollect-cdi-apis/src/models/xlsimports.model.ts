import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "xlsimports"
    }
  }
})
export class Xlsimports extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  destpath?: string;

  @property({
    type: 'string',
  })
  filename?: string;

  @property({
    type: 'number',
  })
  affectedrows?: number;

  @property({
    type: 'number',
  })
  filesize?: number;

  @property({
    type: 'date',
  })
  lastupdate?: string;

  @property({
    type: 'string',
  })
  owner?: string;


  constructor(data?: Partial<Xlsimports>) {
    super(data);
  }
}

export interface XlsimportsRelations {
  // describe navigational properties here
}

export type XlsimportsWithRelations = Xlsimports & XlsimportsRelations;
