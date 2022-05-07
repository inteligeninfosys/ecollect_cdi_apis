import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Ptps, PtpsRelations} from '../models';

export class PtpsRepository extends DefaultCrudRepository<
  Ptps,
  typeof Ptps.prototype.id,
  PtpsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Ptps, dataSource);
  }
}
