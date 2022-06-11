import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "activitylogs"
    }
  }
})
export class Activitylogs extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  @property({
    type: 'Date',
  })
  actiondate?: Date;

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
  custname?: string;

  @property({
    type: 'string',
  })
  collectoraction?: string;

  @property({
    type: 'number',
  })
  party?: number;

  @property({
    type: 'string',
  })
  ptp?: string;

  @property({
    type: 'string',
  })
  ptpid?: string;

  @property({
    type: 'string',
  })
  othereason?: string;

  @property({
    type: 'string',
  })
  collectornote?: string;

  @property({
    type: 'string',
  })
  followupdate?: string;

  @property({
    type: 'string',
  })
  causeofdefault?: string;

  @property({
    type: 'string',
  })
  targetdate?: string;

  @property({
    type: 'string',
  })
  recoverystatus?: string;

  @property({
    type: 'string',
  })
  specificstatus?: string;

  @property({
    type: 'string',
  })
  background?: string;

  @property({
    type: 'string',
  })
  route?: string;

  @property({
    type: 'number',
  })
  totalarrears?: number;

  @property({
    type: 'number',
  })
  outsbalance?: number;

  @property({
    type: 'string',
  })
  notesrc?: string;

  @property({
    type: 'string',
  })
  noteimp?: string;

  @property({
    type: 'string',
  })
  rfdother?: string;

  @property({
    type: 'string',
  })
  owner?: string;

  @property({
    type: 'string',
  })
  bankid?: string;

  @property({
    type: 'number',
  })
  daysinarr?: number;

  @property({
    type: 'string',
  })
  scheduledate?: string;

  @property({
    type: 'boolean',
  })
  callbackscheduleflag?: boolean;

  [prop: string]: any;

  constructor(data?: Partial<Activitylogs>) {
    super(data);
  }
}

export interface ActivitylogsRelations {
  // describe navigational properties here
}

export type ActivitylogsWithRelations = Activitylogs & ActivitylogsRelations;
