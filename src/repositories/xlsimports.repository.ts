import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Xlsimports, XlsimportsRelations} from '../models';

export class XlsimportsRepository extends DefaultCrudRepository<
  Xlsimports,
  typeof Xlsimports.prototype.id,
  XlsimportsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Xlsimports, dataSource);
  }
}
