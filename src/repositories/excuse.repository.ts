import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Excuse, ExcuseRelations} from '../models';

export class ExcuseRepository extends DefaultCrudRepository<
  Excuse,
  typeof Excuse.prototype.id,
  ExcuseRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Excuse, dataSource);
  }
}
