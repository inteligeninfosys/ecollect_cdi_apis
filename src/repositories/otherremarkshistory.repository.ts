import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Otherremarkshistory, OtherremarkshistoryRelations} from '../models';

export class OtherremarkshistoryRepository extends DefaultCrudRepository<
  Otherremarkshistory,
  typeof Otherremarkshistory.prototype.id,
  OtherremarkshistoryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Otherremarkshistory, dataSource);
  }
}
