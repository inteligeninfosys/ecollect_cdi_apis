import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "import_accounts"
    }
  }
})

export class ImportAccounts extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  loanaccount?: string;

  @property({
    type: 'string',
  })
  bank?: string;

  @property({
    type: 'string',
  })
  Collector?: string;

  @property({
    type: 'string',
  })
  customernumber?: string;

  @property({
    type: 'string',
  })
  customername?: string;

  @property({
    type: 'string',
  })
  operativeaccountnumber?: string;

  @property({
    type: 'string',
  })
  ProductType?: string;

  @property({
    type: 'string',
  })
  contact?: string;

  @property({
    type: 'string',
  })
  alternativecontact?: string;

  @property({
    type: 'string',
  })
  Employer?: string;

  @property({
    type: 'string',
  })
  branchname?: string;

  @property({
    type: 'string',
  })
  DateofWriteoff?: string;

  @property({
    type: 'string',
  })
  disbursementamount?: string;

  @property({
    type: 'string',
  })
  lastpaymentdate?: string;

  @property({
    type: 'string',
  })
  TotalExposure?: string;

  @property({
    type: 'string',
  })
  totalarrears?: string;

  @property({
    type: 'string',
  })
  OutstandingExposureWithCommission?: string;

  @property({
    type: 'string',
  })
  outstandingarrearswithcommission?: string;

  @property({
    type: 'string',
  })
  PreviousMonthComment?: string;

  @property({
    type: 'string',
  })
  PreviousMonthStatus?: string;

  @property({
    type: 'string',
  })
  LastPaymentAmt?: string;

  @property({
    type: 'string',
  })
  DaysPastDue?: string;

  @property({
    type: 'string',
  })
  Dateofoutsource?: string;

  @property({
    type: 'string',
  })
  CauseofDefault?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ImportAccounts>) {
    super(data);
  }
}

export interface ImportAccountsRelations {
  // describe navigational properties here
}

export type ImportAccountsWithRelations = ImportAccounts & ImportAccountsRelations;
