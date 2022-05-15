import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "import_stanbic"
    }
  }
})
export class ImportStanbic extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  LoanAccount: string;

  @property({
    type: 'string',
  })
  CustomerName?: string;

  @property({
    type: 'string',
  })
  CustomerNumber?: string;

  @property({
    type: 'string',
  })
  OperativeAccountNumber?: string;

  @property({
    type: 'string',
  })
  BusinessUnit?: string;

  @property({
    type: 'string',
  })
  DateofWriteoff?: string;

  @property({
    type: 'string',
  })
  BranchName?: string;

  @property({
    type: 'string',
  })
  EmployerName?: string;

  @property({
    type: 'string',
  })
  PreferredPhoneNumber?: string;

  @property({
    type: 'string',
  })
  SchemeCode?: string;

  @property({
    type: 'string',
  })
  SchemeDescription?: string;

  @property({
    type: 'string',
  })
  AccountCurrency?: string;

  @property({
    type: 'string',
  })
  LoanAmount?: string;

  @property({
    type: 'string',
  })
  lastpaymentdate?: string;

  @property({
    type: 'string',
  })
  lastpaymentamount?: string;

  @property({
    type: 'string',
  })
  DaysPastDue?: string;

  @property({
    type: 'string',
  })
  Aging?: string;

  @property({
    type: 'string',
  })
  DateofOutsource?: string;

  @property({
    type: 'string',
  })
  TotalArrears?: string;

  @property({
    type: 'string',
  })
  InterestSuspenseAmount?: string;

  @property({
    type: 'string',
  })
  ExchangeRate?: string;

  @property({
    type: 'string',
  })
  BookBalanceLCY?: string;

  @property({
    type: 'string',
  })
  DRInterestRate?: string;

  @property({
    type: 'string',
  })
  Collector?: string;

  @property({
    type: 'string',
  })
  CurrentVendor?: string;

  @property({
    type: 'string',
  })
  VendorManager?: string;

  @property({
    type: 'string',
  })
  LoanDisbursementDate?: string;

  @property({
    type: 'string',
  })
  LoanTerm?: string;

  @property({
    type: 'string',
  })
  NextRepaymentAmount?: string;

  @property({
    type: 'string',
  })
  ProductType?: string;

  @property({
    type: 'string',
  })
  RecoveryStatus?: string;

  @property({
    type: 'string',
  })
  SpecificStatus?: string;

  @property({
    type: 'string',
  })
  PTPAmount?: string;

  @property({
    type: 'string',
  })
  DetailedVendorCommentry?: string;

  @property({
    type: 'string',
  })
  CauseofDefault?: string;

  @property({
    type: 'string',
  })
  ActionTreatment?: string;

  @property({
    type: 'string',
  })
  TargetDate?: string;


  constructor(data?: Partial<ImportStanbic>) {
    super(data);
  }
}

export interface ImportStanbicRelations {
  // describe navigational properties here
}

export type ImportStanbicWithRelations = ImportStanbic & ImportStanbicRelations;
