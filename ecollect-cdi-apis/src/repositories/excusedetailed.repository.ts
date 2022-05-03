import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Excusedetailed, ExcusedetailedRelations} from '../models';

export class ExcusedetailedRepository extends DefaultCrudRepository<
  Excusedetailed,
  typeof Excusedetailed.prototype.id,
  ExcusedetailedRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Excusedetailed, dataSource);
  }
}
