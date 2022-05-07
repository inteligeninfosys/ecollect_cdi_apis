import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Sms, SmsRelations} from '../models';

export class SmsRepository extends DefaultCrudRepository<
  Sms,
  typeof Sms.prototype.id,
  SmsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Sms, dataSource);
  }
}
