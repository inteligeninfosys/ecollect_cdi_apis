import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Uploads, UploadsRelations} from '../models';

export class UploadsRepository extends DefaultCrudRepository<
  Uploads,
  typeof Uploads.prototype.id,
  UploadsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Uploads, dataSource);
  }
}
