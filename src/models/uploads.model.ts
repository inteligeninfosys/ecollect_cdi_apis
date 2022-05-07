import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "uploads"
    }
  }
})

export class Uploads extends Entity {
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
  custnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  accnumber: string;

  @property({
    type: 'string',
  })
  doctype?: string;

  @property({
    type: 'string',
  })
  docdesc?: string;

  @property({
    type: 'string',
  })
  destpath?: string;

  @property({
    type: 'string',
  })
  colofficer?: string;

  @property({
    type: 'string',
  })
  filetype?: string;

  @property({
    type: 'string',
  })
  filename?: string;

  @property({
    type: 'string',
  })
  filesize?: string;

  @property({
    type: 'date',
  })
  lastupdate?: string;


  constructor(data?: Partial<Uploads>) {
    super(data);
  }
}

export interface UploadsRelations {
  // describe navigational properties here
}

export type UploadsWithRelations = Uploads & UploadsRelations;
