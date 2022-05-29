import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {MysqlDataSource} from '../datasources';
import {Tqall} from '../models';
import {TqallRepository} from '../repositories';

export type tqallbulkdata = {
  accnumber: string;
  colofficer: string;
  currency: string;
  custname: string;
  custnumber: string;
  daysinarr: number;
  institution: string;
  oustbalance: number;
  receiveddate: string;
  totalarrears: number;
};

export type importstanbicdata = {
  LoanAccount: string;
  CustomerName: string;
  CustomerNumber: string;
  OperativeAccountNumber: string;
  BusinessUnit: string;
  DateofWriteoff: string;
  BranchName: string;
  EmployerName: string;
  PreferredPhoneNumber: string;
  SchemeCode: string;
  SchemeDescription: string;
  AccountCurrency: string;
  LoanAmount: string;
  lastpaymentdate: string;
  lastpaymentamount: string;
  DaysPastDue: string;
  Aging: string;
  DateofOutsource: string;
  TotalArrears: string;
  InterestSuspenseAmount: string;
  ExchangeRate: string;
  BookBalanceLCY: string;
  DRInterestRate: string;
  Collector: string;
  CurrentVendor: string;
  VendorManager: string;
  LoanDisbursementDate: string;
  LoanTerm: string;
  NextRepaymentAmount: string;
  ProductType: string;
  RecoveryStatus: string;
  SpecificStatus: string;
  PTPAmount: string;
  DetailedVendorCommentry: string;
  CauseofDefault: string;
  ActionTreatment: string;
  TargetDate: string;
  CallBackDate: string;
  MonthlyProjections: string;
};

export type importgeneraldata = {
  Bank: string;
  LoanAccount: string;
  CustomerName: string;
  CustomerNumber: string;
  OperativeAccountNumber: string;
  BusinessUnit: string;
  DateofWriteoff: string;
  BranchName: string;
  EmployerName: string;
  PreferredPhoneNumber: string;
  SchemeCode: string;
  SchemeDescription: string;
  AccountCurrency: string;
  LoanAmount: string;
  lastpaymentdate: string;
  lastpaymentamount: string;
  DaysPastDue: string;
  Aging: string;
  DateofOutsource: string;
  TotalArrears: string;
  InterestSuspenseAmount: string;
  ExchangeRate: string;
  BookBalanceLCY: string;
  DRInterestRate: string;
  Collector: string;
  CurrentVendor: string;
  VendorManager: string;
  LoanDisbursementDate: string;
  LoanTerm: string;
  NextRepaymentAmount: string;
  ProductType: string;
  RecoveryStatus: string;
  SpecificStatus: string;
  PTPAmount: string;
  DetailedVendorCommentry: string;
  CauseofDefault: string;
  ActionTreatment: string;
  TargetDate: string;
  CallBackDate: string;
  MonthlyProjections: string;
};

export type importdfcudata = {
  LoanAccount: string;
  CustomerNumber: string;
  CustomerName: string;
  OperativeAccountNumber: string;
  LoanType: string;
  DateOfOutsource: string;
  PhoneNumber: string;
  NewContacts: string;
  Email: string;
  Occupation: string;
  ProductType: string;
  Employer: string;
  EDC: string;
  Region: string;
  Branch: string;
  AccountCurrency: string;
  LastPaymentDate: string;
  DisbursementAmountBase: string;
  DisbursementDate: string;
  ExpiryDate: string;
  ChargeOffDate: string;
  Collector: string;
  OutsourcedExposure: string;
  OutsourcedArrears: string;
  MonthlyInstallment: string;
  MonthlyTarget: string;
  NextDueDate: string;
  DaysPastDue: string;
  OutsourcedTarget: string;
  PrincipalBalanceBase: string;
  ChargeOffAmnt: string;
  InterestInSuspenseBase: string;
  CauseofDefault: string;
  DetailedVendorCommentry: string;
  Status: string;
  MonthlyProjections: string;
  CallBackDate: string;
};

export type importboadata = {
  LoanAccount: string;
  CustomerName: string;
  CustomerNumber: string;
  OperativeAccountNumber: string;
  Employer: string;
  DateOfOutsource: string;
  JobProfile: string;
  LoanType: string;
  Contact: string;
  NewContact: string;
  Principle: string;
  Interest: string;
  OutSourcedBalance: string;
  Collector: string;
  DetailedVendorCommentry: string;
  CauseofDefault: string;
  ActionTreatment: string;
  TargetDate: string;
  CallBackDate: string;
  MonthlyProjections: string;
}

export type importequitydata = {
  LoanAccount: string;
  CustomerName: string;
  CustomerNumber: string;
  OperativeAccountNumber: string;
  DateOfOutsource: string;
  Product: string;
  Employer: string;
  PhoneNumber: string;
  Contact: string;
  NewContact: string;
  Email: string;
  AddressLine1: string;
  AddressLine2: string;
  LoanAmount: string;
  Totalarrears: string;
  AccountCurrency: string;
  LoanDisbursementAmount: string;
  DaysPastDue: string;
  InstallmentAmount: string;
  ChargeOffDate: string;
  PrincipleBalance: string;
  PendingInterest: string;
  EDC: string;
  Collector: string;
  Classification: string;
  Sector: string;
  DetailedVendorCommentry: string;
  CauseofDefault: string;
  ActionTreatment: string;
  TargetDate: string;
  CallBackDate: string;
  MonthlyProjections: string;
}

export type importaccountsdata = {
  LoanAccount: string;
  CustomerNumber: string;
  Bank: string;
  Collector: string;
  CustomerName: string;
  OperativeAccountNumber: string;
  ProductType: string;
  Contact: string;
  AlternativeContact: string;
  Employer: string;
  BranchName: string;
  DateofWriteoff: string;
  DisbursmentDate: string;
  DisbursmentAmount: string;
  LastPaymentDate: string;
  TotalExposure: number;
  TotalArrears: number;
  OutstandingExposureWithCommission: number;
  OutstandingArrearsWithCommission: number;
  PreviousMonthComment: string;
  PreviousMonthStatus: string;
}

const spec = {
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
    },
  },
};

export class TqallController {
  constructor(
    @inject('datasources.mysql') public dataSource: MysqlDataSource,
    @repository(TqallRepository)
    public tqallRepository: TqallRepository,
  ) { }


  @post('/nodeapi/tqall')
  @response(200, {
    description: 'Tqall model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tqall)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tqall, {
            title: 'NewTqall',
          }),
        },
      },
    })
    tqall: Tqall,
  ): Promise<Tqall> {
    return this.tqallRepository.create(tqall);
  }

  @get('/nodeapi/tqall/count')
  @response(200, {
    description: 'Tqall model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tqall) where?: Where<Tqall>,
  ): Promise<Count> {
    return this.tqallRepository.count(where);
  }

  @get('/nodeapi/tqall')
  @response(200, {
    description: 'Array of Tqall model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tqall, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tqall) filter?: Filter<Tqall>,
  ): Promise<Tqall[]> {
    return this.tqallRepository.find(filter);
  }

  @patch('/nodeapi/tqall')
  @response(200, {
    description: 'Tqall PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tqall, {partial: true}),
        },
      },
    })
    tqall: Tqall,
    @param.where(Tqall) where?: Where<Tqall>,
  ): Promise<Count> {
    return this.tqallRepository.updateAll(tqall, where);
  }

  @get('/nodeapi/tqall/{id}')
  @response(200, {
    description: 'Tqall model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tqall, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tqall, {exclude: 'where'}) filter?: FilterExcludingWhere<Tqall>
  ): Promise<Tqall> {
    return this.tqallRepository.findById(id, filter);
  }

  @patch('/nodeapi/tqall/{id}')
  @response(204, {
    description: 'Tqall PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tqall, {partial: true}),
        },
      },
    })
    tqall: Tqall,
  ): Promise<void> {
    await this.tqallRepository.updateById(id, tqall);
  }

  @put('/nodeapi/tqall/{id}')
  @response(204, {
    description: 'Tqall PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tqall: Tqall,
  ): Promise<void> {
    await this.tqallRepository.replaceById(id, tqall);
  }

  @del('/nodeapi/tqall/{id}')
  @response(204, {
    description: 'Tqall DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tqallRepository.deleteById(id);
  }

  //searchwithaccount
  @get('/nodeapi/tqall/searchwithaccount/{accnumber}')
  @response(200, {
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tqall, {includeRelations: true}),
      },
    },
  })
  async searchwithaccount(
    @param.path.string('accnumber') accnumber: string): Promise<any> {
    const result = await this.dataSource.execute("select * from tqallbanks where LoanAccount='" + accnumber + "'")
    if (result) {
      return result
    }
  }

  //importaccounts
  @post('/nodeapi/tqall/importaccounts', {
    responses: {
      '200': spec,
    },
  })
  async importaccounts
    (@requestBody() body: Array<importaccountsdata>): Promise<any> {
    var inputdata = [body.map(item => [item.LoanAccount, item.Bank, item.Collector, item.CustomerNumber, item.CustomerName, item.OperativeAccountNumber, item.ProductType, item.Contact, item.AlternativeContact, item.Employer, item.BranchName, item.DateofWriteoff, item.DisbursmentDate, item.DisbursmentAmount, item.LastPaymentDate, item.TotalExposure, item.TotalArrears, item.OutstandingExposureWithCommission, item.OutstandingArrearsWithCommission, item.PreviousMonthComment, item.PreviousMonthStatus])]

    const result = await this.dataSource.execute('insert into import_accounts (loanaccount,bank,Collector,CustomerNumber,CustomerName,OperativeAccountNumber,ProductType,Contact,AlternativeContact,Employer,BranchName,DateofWriteoff,DisbursmentDate,DisbursmentAmount,LastPaymentDate,TotalExposure,TotalArrears,OutstandingExposureWithCommission,OutstandingArrearsWithCommission,PreviousMonthComment,PreviousMonthStatus) values ?', inputdata)
    if (result) {
      return result
    }
  }

  //importstanbic
  @post('/nodeapi/tqall/importgeneral', {
    responses: {
      '200': spec,
    },
  })
  async importgeneral
    (@requestBody() body: Array<importgeneraldata>): Promise<any> {
    var inputdata = [body.map(item => [item.Bank, item.LoanAccount, item.CustomerName, item.CustomerNumber, item.OperativeAccountNumber, item.BusinessUnit, item.DateofWriteoff, item.BranchName, item.EmployerName, item.PreferredPhoneNumber, item.SchemeCode, item.SchemeDescription, item.AccountCurrency, item.LoanAmount, item.lastpaymentdate, item.lastpaymentamount, item.DaysPastDue, item.Aging, item.DateofOutsource, item.TotalArrears, item.InterestSuspenseAmount, item.ExchangeRate, item.BookBalanceLCY, item.DRInterestRate, item.Collector, item.CurrentVendor, item.VendorManager, item.LoanDisbursementDate, item.LoanTerm, item.NextRepaymentAmount, item.ProductType, item.RecoveryStatus, item.SpecificStatus, item.PTPAmount, item.DetailedVendorCommentry, item.CauseofDefault, item.ActionTreatment, item.TargetDate, item.CallBackDate, item.MonthlyProjections])]

    const result = await this.dataSource.execute('insert into import_general (Bank,LoanAccount,CustomerName,CustomerNumber, OperativeAccountNumber,BusinessUnit,DateofWriteoff,BranchName,EmployerName,PreferredPhoneNumber,SchemeCode,SchemeDescription,AccountCurrency,LoanAmount,lastpaymentdate,lastpaymentamount,DaysPastDue,Aging,DateofOutsource,TotalArrears,InterestSuspenseAmount,ExchangeRate,BookBalanceLCY,DRInterestRate,Collector,CurrentVendor,VendorManager,LoanDisbursementDate,LoanTerm,NextRepaymentAmount,ProductType,RecoveryStatus,SpecificStatus,PTPAmount,DetailedVendorCommentry,CauseofDefault,ActionTreatment,TargetDate,CallBackDate,MonthlyProjections) values ?', inputdata)
    if (result) {
      return result
    }
  }

  //importstanbic
  @post('/nodeapi/tqall/importstanbic', {
    responses: {
      '200': spec,
    },
  })
  async importstanbic
    (@requestBody() body: Array<importstanbicdata>): Promise<any> {
    var inputdata = [body.map(item => [item.LoanAccount, item.CustomerName, item.CustomerNumber, item.OperativeAccountNumber, item.BusinessUnit, item.DateofWriteoff, item.BranchName, item.EmployerName, item.PreferredPhoneNumber, item.SchemeCode, item.SchemeDescription, item.AccountCurrency, item.LoanAmount, item.lastpaymentdate, item.lastpaymentamount, item.DaysPastDue, item.Aging, item.DateofOutsource, item.TotalArrears, item.InterestSuspenseAmount, item.ExchangeRate, item.BookBalanceLCY, item.DRInterestRate, item.Collector, item.CurrentVendor, item.VendorManager, item.LoanDisbursementDate, item.LoanTerm, item.NextRepaymentAmount, item.ProductType, item.RecoveryStatus, item.SpecificStatus, item.PTPAmount, item.DetailedVendorCommentry, item.CauseofDefault, item.ActionTreatment, item.TargetDate, item.CallBackDate, item.MonthlyProjections])]

    const result = await this.dataSource.execute('insert into import_stanbic (LoanAccount,CustomerName,CustomerNumber, OperativeAccountNumber,BusinessUnit,DateofWriteoff,BranchName,EmployerName,PreferredPhoneNumber,SchemeCode,SchemeDescription,AccountCurrency,LoanAmount,lastpaymentdate,lastpaymentamount,DaysPastDue,Aging,DateofOutsource,TotalArrears,InterestSuspenseAmount,ExchangeRate,BookBalanceLCY,DRInterestRate,Collector,CurrentVendor,VendorManager,LoanDisbursementDate,LoanTerm,NextRepaymentAmount,ProductType,RecoveryStatus,SpecificStatus,PTPAmount,DetailedVendorCommentry,CauseofDefault,ActionTreatment,TargetDate,CallBackDate,MonthlyProjections) values ?', inputdata)
    if (result) {
      return result
    }
  }

  //importdfcu
  @post('/nodeapi/tqall/importdfcu', {
    responses: {
      '200': spec,
    },
  })
  async importdfcu
    (@requestBody() body: Array<importdfcudata>): Promise<any> {
    var inputdata = [body.map(item => [item.LoanAccount, item.CustomerNumber, item.CustomerName, item.OperativeAccountNumber, item.LoanType, item.DateOfOutsource, item.PhoneNumber, item.NewContacts, item.Email, item.Occupation, item.ProductType, item.Employer, item.EDC, item.Region, item.Branch, item.AccountCurrency, item.LastPaymentDate, item.DisbursementAmountBase, item.DisbursementDate, item.ExpiryDate, item.ChargeOffDate, item.Collector, item.OutsourcedExposure, item.OutsourcedArrears, item.MonthlyInstallment, item.MonthlyTarget, item.NextDueDate, item.DaysPastDue, item.OutsourcedTarget, item.PrincipalBalanceBase, item.ChargeOffAmnt, item.InterestInSuspenseBase, item.CauseofDefault, item.DetailedVendorCommentry, item.Status, item.MonthlyProjections, item.CallBackDate])]

    const result = await this.dataSource.execute('insert into import_dfcu (LoanAccount,CustomerNumber,CustomerName,OperativeAccountNumber,LoanType,DateOfOutsource,PhoneNumber,NewContacts,Email,Occupation,ProductType,Employer,EDC,Region,Branch,AccountCurrency,LastPaymentDate,DisbursementAmountBase,DisbursementDate,ExpiryDate,ChargeOffDate,Collector,OutsourcedExposure,OutsourcedArrears,MonthlyInstallment,MonthlyTarget,NextDueDate,DaysPastDue,OutsourcedTarget,PrincipalBalanceBase,ChargeOffAmnt,InterestInSuspenseBase,CauseofDefault,DetailedVendorCommentry,Status,MonthlyProjections,CallBackDate) values ?', inputdata)
    if (result) {
      return result
    }
  }

  //importboa
  @post('/nodeapi/tqall/importboa', {
    responses: {
      '200': spec,
    },
  })
  async importboa
    (@requestBody() body: Array<importboadata>): Promise<any> {
    var inputdata = [body.map(item => [item.LoanAccount, item.CustomerName, item.CustomerNumber, item.OperativeAccountNumber, item.Employer, item.DateOfOutsource, item.JobProfile, item.LoanType, item.Contact, item.NewContact, item.Principle, item.Interest, item.OutSourcedBalance, item.Collector, item.DetailedVendorCommentry, item.CauseofDefault, item.ActionTreatment, item.TargetDate, item.CallBackDate, item.MonthlyProjections])]
    const result = await this.dataSource.execute('insert into import_boa (LoanAccount,CustomerName,CustomerNumber,OperativeAccountNumber,Employer,DateOfOutsource,JobProfile,LoanType,Contact,NewContact,Principle,Interest,OutSourcedBalance,Collector,DetailedVendorCommentry,CauseofDefault,ActionTreatment,TargetDate,CallBackDate,MonthlyProjections) values ?', inputdata)
    if (result) {
      return result
    }
  }

  //importequity
  @post('/nodeapi/tqall/importequity', {
    responses: {
      '200': spec,
    },
  })
  async importequity
    (@requestBody() body: Array<importequitydata>): Promise<any> {
    var inputdata = [body.map(item => [item.LoanAccount, item.CustomerName, item.CustomerNumber, item.OperativeAccountNumber, item.DateOfOutsource, item.Product, item.Employer, item.PhoneNumber, item.Contact, item.NewContact, item.Email, item.AddressLine1, item.AddressLine2, item.LoanAmount, item.Totalarrears, item.AccountCurrency, item.LoanDisbursementAmount, item.DaysPastDue, item.InstallmentAmount, item.ChargeOffDate, item.PrincipleBalance, item.PendingInterest, item.EDC, item.Collector, item.Classification, item.Sector, item.DetailedVendorCommentry, item.CauseofDefault, item.ActionTreatment, item.TargetDate, item.CallBackDate, item.MonthlyProjections])]

    const result = await this.dataSource.execute('insert into import_equity (LoanAccount,CustomerName,CustomerNumber,OperativeAccountNumber,DateOfOutsource,Product,Employer,PhoneNumber,Contact,NewContact,Email,AddressLine1,AddressLine2,LoanAmount,Totalarrears,AccountCurrency,LoanDisbursementAmount,DaysPastDue,InstallmentAmount,ChargeOffDate,PrincipleBalance,PendingInterest,EDC,Collector,Classification,Sector,DetailedVendorCommentry,CauseofDefault,ActionTreatment,TargetDate,CallBackDate,MonthlyProjections) values ?', inputdata)
    if (result) {
      return result
    }
  }

  //
  @post('/nodeapi/tqall/gridviewall', {
    responses: {
      '200': spec,
    },
  })
  async gridviewall
    (@requestBody() body: object): Promise<any> {
    const result = await this.dataSource.execute(this.buildSql(body))
    const rowCount = this.getRowCount(body, result);
    const resultsForPage = this.cutResultsToPageSize(body, result);
    return {
      lastRow: rowCount,
      rows: resultsForPage
    };
  }

  buildSql(request: any) {
    const selectSql = this.createSelectSql(request);
    const fromSql = ' from ecol.tqallbanks ';
    const whereSql = this.createWhereSql(request);
    const limitSql = this.createLimitSql(request);

    const orderBySql = this.createOrderBySql(request);
    const groupBySql = this.createGroupBySql(request);

    const SQL = selectSql + fromSql + whereSql + groupBySql + orderBySql + limitSql;


    return SQL;
  }

  createSelectSql(request: any) {
    //console.log(request)
    const rowGroupCols = request.rowGroupCols;
    const valueCols = request.valueCols;
    const groupKeys = request.groupKeys;

    if (this.isDoingGrouping(rowGroupCols, groupKeys)) {
      const colsToSelect = [];

      const rowGroupCol = rowGroupCols[groupKeys.length];
      colsToSelect.push(rowGroupCol.field);

      valueCols.forEach(function (valueCol: any) {
        colsToSelect.push(valueCol.aggFunc + '(' + valueCol.field + ') as ' + valueCol.field);
      });

      return ' select ' + colsToSelect.join(', ');
    }

    return ' select *';
  }

  createFilterSql(key: any, item: any) {
    switch (item.filterType) {
      case 'text':
        return this.createTextFilterSql(key, item);
      case 'number':
        return this.createNumberFilterSql(key, item);
      default:
        console.log('unkonwn filter type: ' + item.filterType);
    }
  }

  createNumberFilterSql(key: any, item: any) {
    switch (item.type) {
      case 'equals':
        return key + ' = ' + item.filter;
      case 'notEqual':
        return key + ' != ' + item.filter;
      case 'greaterThan':
        return key + ' > ' + item.filter;
      case 'greaterThanOrEqual':
        return key + ' >= ' + item.filter;
      case 'lessThan':
        return key + ' < ' + item.filter;
      case 'lessThanOrEqual':
        return key + ' <= ' + item.filter;
      case 'inRange':
        return '(' + key + ' >= ' + item.filter + ' and ' + key + ' <= ' + item.filterTo + ')';
      default:
        console.log('unknown number filter type: ' + item.type);
        return 'true';
    }
  }

  createTextFilterSql(key: any, item: any) {
    switch (item.type) {
      case 'equals':
        return 'upper(' + key + ') = \'' + (item.filter).toUpperCase() + '\'';
      case 'notEqual':
        return 'upper(' + key + ') != \'' + (item.filter).toUpperCase() + '\'';
      case 'contains':
        return 'upper(' + key + ') like \'%' + (item.filter).toUpperCase() + '%\'';
      case 'notContains':
        return 'upper(' + key + ') not like \'%' + (item.filter).toUpperCase() + '%\'';
      case 'startsWith':
        return 'upper(' + key + ') like \'' + (item.filter).toUpperCase() + '%\'';
      case 'endsWith':
        return 'upper(' + key + ') like \'%' + (item.filter).toUpperCase() + '\'';
      default:
        console.log('unknown text filter type: ' + item.type);
        return 'true';
    }
  }

  createWhereSql(request: any) {
    const rowGroupCols = request.rowGroupCols;
    const groupKeys = request.groupKeys;
    const filterModel = request.filterModel;

    // console.log(filterModel)

    const that = this;
    const whereParts: any = [];

    if (groupKeys.length > 0) {
      groupKeys.forEach(function (key: any, index: any) {
        const colName = rowGroupCols[index].field;
        whereParts.push(colName + '= \'' + key + '\'')
        //   whereParts.push(colName +  '= "' + key + '"')
      });
    }

    if (filterModel) {
      const keySet = Object.keys(filterModel);
      keySet.forEach(function (key) {
        const item = filterModel[key];
        whereParts.push(that.createFilterSql(key, item));
      });
    }

    if (whereParts.length > 0) {
      return ' where ' + whereParts.join(' and ');
    } else {
      return '';
    }
  }

  createGroupBySql(request: any) {
    const rowGroupCols = request.rowGroupCols;
    const groupKeys = request.groupKeys;

    if (this.isDoingGrouping(rowGroupCols, groupKeys)) {
      const colsToGroupBy = [];

      const rowGroupCol = rowGroupCols[groupKeys.length];
      colsToGroupBy.push(rowGroupCol.field);

      return ' group by ' + colsToGroupBy.join(', ');
    } else {
      // select all columns
      return '';
    }
  }

  createOrderBySql(request: any) {
    const rowGroupCols = request.rowGroupCols;
    const groupKeys = request.groupKeys;
    const sortModel = request.sortModel;

    const grouping = this.isDoingGrouping(rowGroupCols, groupKeys);

    const sortParts: any = [];
    if (sortModel) {

      const groupColIds =
        rowGroupCols.map((groupCol: {id: any;}) => groupCol.id)
          .slice(0, groupKeys.length + 1);

      sortModel.forEach(function (item: any) {
        if (grouping && groupColIds.indexOf(item.colId) < 0) {
          // ignore
        } else {
          sortParts.push(item.colId + ' ' + item.sort);
        }
      });
    }

    if (sortParts.length > 0) {
      return ' order by ' + sortParts.join(', ');
    } else {
      return '';
    }
  }

  isDoingGrouping(rowGroupCols: any, groupKeys: any) {
    // we are not doing grouping if at the lowest level. we are at the lowest level
    // if we are grouping by more columns than we have keys for (that means the user
    // has not expanded a lowest level group, OR we are not grouping at all).
    return rowGroupCols.length > groupKeys.length;
  }

  createLimitSql(request: any) {
    const startRow = request.startRow;
    const endRow = request.endRow;
    const pageSize = endRow - startRow;

    //return ' OFFSET ' + startRow + ' ROWS FETCH NEXT ' + (pageSize + 1) + ' ROWS only'
    return ' limit ' + (pageSize + 1) + ' offset ' + startRow;
  }


  cutResultsToPageSize(request: any, results: any) {
    const pageSize = request.endRow - request.startRow;
    if (results && results.length > pageSize) {
      return results.splice(0, pageSize);
    } else {
      return results;
    }
  }

  getRowCount(request: any, results: any) {
    if (results === null || results === undefined || results.length === 0) {
      return null;
    }
    const currentLastRow = request.startRow + results.length;
    return currentLastRow <= request.endRow ? currentLastRow : -1;
  }
}
