import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Commissions, CommissionsRelations} from '../models';

export class CommissionsRepository extends DefaultCrudRepository<
  Commissions,
  typeof Commissions.prototype.id,
  CommissionsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Commissions, dataSource);
  }
}
