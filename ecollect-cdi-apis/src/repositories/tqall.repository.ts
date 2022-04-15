import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tqall, TqallRelations} from '../models';

export class TqallRepository extends DefaultCrudRepository<
  Tqall,
  typeof Tqall.prototype.accnumber,
  TqallRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tqall, dataSource);
  }
}
