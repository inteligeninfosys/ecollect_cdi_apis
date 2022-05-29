import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TblportfolioStatic, TblportfolioStaticRelations} from '../models';

export class TblportfolioStaticRepository extends DefaultCrudRepository<
  TblportfolioStatic,
  typeof TblportfolioStatic.prototype.loanaccount,
  TblportfolioStaticRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TblportfolioStatic, dataSource);
  }
}
