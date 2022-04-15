import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Activitylogs, ActivitylogsRelations} from '../models';

export class ActivitylogsRepository extends DefaultCrudRepository<
  Activitylogs,
  typeof Activitylogs.prototype.id,
  ActivitylogsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Activitylogs, dataSource);
  }
}
