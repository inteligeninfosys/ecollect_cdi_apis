import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ImportStanbic, ImportStanbicRelations} from '../models';

export class ImportStanbicRepository extends DefaultCrudRepository<
  ImportStanbic,
  typeof ImportStanbic.prototype.LoanAccount,
  ImportStanbicRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ImportStanbic, dataSource);
  }
}
