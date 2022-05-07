import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Signininvites, SignininvitesRelations} from '../models';

export class SignininvitesRepository extends DefaultCrudRepository<
  Signininvites,
  typeof Signininvites.prototype.id,
  SignininvitesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Signininvites, dataSource);
  }
}
