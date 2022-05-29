import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {TblportfolioStatic} from '../models';
import {TblportfolioStaticRepository} from '../repositories';

export class TblportfoliostaticController {
  constructor(
    @repository(TblportfolioStaticRepository)
    public tblportfolioStaticRepository: TblportfolioStaticRepository,
  ) { }

  @post('/nodeapi/tblportfolio-statics')
  @response(200, {
    description: 'TblportfolioStatic model instance',
    content: {'application/json': {schema: getModelSchemaRef(TblportfolioStatic)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TblportfolioStatic, {
            title: 'NewTblportfolioStatic',

          }),
        },
      },
    })
    tblportfolioStatic: TblportfolioStatic,
  ): Promise<TblportfolioStatic> {
    return this.tblportfolioStaticRepository.create(tblportfolioStatic);
  }

  @get('/nodeapi/tblportfolio-statics/count')
  @response(200, {
    description: 'TblportfolioStatic model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TblportfolioStatic) where?: Where<TblportfolioStatic>,
  ): Promise<Count> {
    return this.tblportfolioStaticRepository.count(where);
  }

  @get('/nodeapi/tblportfolio-statics')
  @response(200, {
    description: 'Array of TblportfolioStatic model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TblportfolioStatic, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TblportfolioStatic) filter?: Filter<TblportfolioStatic>,
  ): Promise<TblportfolioStatic[]> {
    return this.tblportfolioStaticRepository.find(filter);
  }

  @patch('/nodeapi/tblportfolio-statics')
  @response(200, {
    description: 'TblportfolioStatic PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TblportfolioStatic, {partial: true}),
        },
      },
    })
    tblportfolioStatic: TblportfolioStatic,
    @param.where(TblportfolioStatic) where?: Where<TblportfolioStatic>,
  ): Promise<Count> {
    return this.tblportfolioStaticRepository.updateAll(tblportfolioStatic, where);
  }

  @get('/nodeapi/tblportfolio-statics/{id}')
  @response(200, {
    description: 'TblportfolioStatic model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TblportfolioStatic, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TblportfolioStatic, {exclude: 'where'}) filter?: FilterExcludingWhere<TblportfolioStatic>
  ): Promise<TblportfolioStatic> {
    return this.tblportfolioStaticRepository.findById(id, filter);
  }

  @patch('/nodeapi/tblportfolio-statics/{id}')
  @response(204, {
    description: 'TblportfolioStatic PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TblportfolioStatic, {partial: true}),
        },
      },
    })
    tblportfolioStatic: TblportfolioStatic,
  ): Promise<void> {
    await this.tblportfolioStaticRepository.updateById(id, tblportfolioStatic);
  }

  @put('/nodeapi/tblportfolio-statics/{id}')
  @response(204, {
    description: 'TblportfolioStatic PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tblportfolioStatic: TblportfolioStatic,
  ): Promise<void> {
    await this.tblportfolioStaticRepository.replaceById(id, tblportfolioStatic);
  }

  @del('/nodeapi/tblportfolio-statics/{id}')
  @response(204, {
    description: 'TblportfolioStatic DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tblportfolioStaticRepository.deleteById(id);
  }
}
