import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Teles, TelesRelations} from '../models';

export class TelesRepository extends DefaultCrudRepository<
  Teles,
  typeof Teles.prototype.id,
  TelesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Teles, dataSource);
  }
}
