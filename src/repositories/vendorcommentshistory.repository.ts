import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Vendorcommentshistory, VendorcommentshistoryRelations} from '../models';

export class VendorcommentshistoryRepository extends DefaultCrudRepository<
  Vendorcommentshistory,
  typeof Vendorcommentshistory.prototype.id,
  VendorcommentshistoryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Vendorcommentshistory, dataSource);
  }
}
