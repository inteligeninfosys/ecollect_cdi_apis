import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Excusedetailed} from '../models';
import {ExcusedetailedRepository} from '../repositories';

export class ExcusedetailedController {
  constructor(
    @repository(ExcusedetailedRepository)
    public excusedetailedRepository : ExcusedetailedRepository,
  ) {}

  @post('/nodeapi/excusedetailed')
  @response(200, {
    description: 'Excusedetailed model instance',
    content: {'application/json': {schema: getModelSchemaRef(Excusedetailed)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Excusedetailed, {
            title: 'NewExcusedetailed',
            exclude: ['id'],
          }),
        },
      },
    })
    excusedetailed: Omit<Excusedetailed, 'id'>,
  ): Promise<Excusedetailed> {
    return this.excusedetailedRepository.create(excusedetailed);
  }

  @get('/nodeapi/excusedetailed/count')
  @response(200, {
    description: 'Excusedetailed model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Excusedetailed) where?: Where<Excusedetailed>,
  ): Promise<Count> {
    return this.excusedetailedRepository.count(where);
  }

  @get('/nodeapi/excusedetailed')
  @response(200, {
    description: 'Array of Excusedetailed model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Excusedetailed, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Excusedetailed) filter?: Filter<Excusedetailed>,
  ): Promise<Excusedetailed[]> {
    return this.excusedetailedRepository.find(filter);
  }

  @patch('/nodeapi/excusedetailed')
  @response(200, {
    description: 'Excusedetailed PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Excusedetailed, {partial: true}),
        },
      },
    })
    excusedetailed: Excusedetailed,
    @param.where(Excusedetailed) where?: Where<Excusedetailed>,
  ): Promise<Count> {
    return this.excusedetailedRepository.updateAll(excusedetailed, where);
  }

  @get('/nodeapi/excusedetailed/{id}')
  @response(200, {
    description: 'Excusedetailed model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Excusedetailed, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Excusedetailed, {exclude: 'where'}) filter?: FilterExcludingWhere<Excusedetailed>
  ): Promise<Excusedetailed> {
    return this.excusedetailedRepository.findById(id, filter);
  }

  @patch('/nodeapi/excusedetailed/{id}')
  @response(204, {
    description: 'Excusedetailed PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Excusedetailed, {partial: true}),
        },
      },
    })
    excusedetailed: Excusedetailed,
  ): Promise<void> {
    await this.excusedetailedRepository.updateById(id, excusedetailed);
  }

  @put('/nodeapi/excusedetailed/{id}')
  @response(204, {
    description: 'Excusedetailed PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() excusedetailed: Excusedetailed,
  ): Promise<void> {
    await this.excusedetailedRepository.replaceById(id, excusedetailed);
  }

  @del('/nodeapi/excusedetailed/{id}')
  @response(204, {
    description: 'Excusedetailed DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.excusedetailedRepository.deleteById(id);
  }
}
