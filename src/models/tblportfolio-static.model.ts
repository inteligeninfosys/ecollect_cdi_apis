import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "tblportfolio_static"
    }
  }
})
export class TblportfolioStatic extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  loanaccount: string;

  @property({
    type: 'string',
    required: true,
  })
  bank: string;

  @property({
    type: 'date',
  })
  lastactiondate?: string;

  @property({
    type: 'string',
  })
  lastupdateby?: string;

  @property({
    type: 'string',
  })
  nextreviewdate?: string;

  @property({
    type: 'string',
  })
  monthstatus?: string;

  @property({
    type: 'string',
  })
  monthcomment?: string;

  @property({
    type: 'string',
  })
  recoverystatus?: string;

  @property({
    type: 'string',
  })
  specificstatus?: string;

  @property({
    type: 'number',
  })
  ptp?: number;

  @property({
    type: 'string',
  })
  detailedvendorcomments?: string;

  @property({
    type: 'string',
  })
  causeofdefault?: string;

  @property({
    type: 'string',
  })
  actiontreatment?: string;

  @property({
    type: 'string',
  })
  targetdate?: string;

  @property({
    type: 'string',
  })
  followupdate?: string;

  @property({
    type: 'string',
  })
  currentstrategycomment?: string;

  @property({
    type: 'string',
  })
  remarksstatus?: string;


  constructor(data?: Partial<TblportfolioStatic>) {
    super(data);
  }
}

export interface TblportfolioStaticRelations {
  // describe navigational properties here
}

export type TblportfolioStaticWithRelations = TblportfolioStatic & TblportfolioStaticRelations;
