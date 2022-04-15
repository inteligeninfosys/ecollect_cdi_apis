import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Banks, BanksRelations} from '../models';

export class BanksRepository extends DefaultCrudRepository<
  Banks,
  typeof Banks.prototype.bankid,
  BanksRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Banks, dataSource);
  }
}
