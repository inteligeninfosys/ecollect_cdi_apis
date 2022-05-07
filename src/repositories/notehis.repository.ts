import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Notehis, NotehisRelations} from '../models';

export class NotehisRepository extends DefaultCrudRepository<
  Notehis,
  typeof Notehis.prototype.id,
  NotehisRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Notehis, dataSource);
  }
}
