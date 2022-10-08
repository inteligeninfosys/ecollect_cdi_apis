import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ImportAccounts, ImportAccountsRelations} from '../models';

export class ImportAccountsRepository extends DefaultCrudRepository<
  ImportAccounts,
  typeof ImportAccounts.prototype.loanaccount,
  ImportAccountsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ImportAccounts, dataSource);
  }
}
