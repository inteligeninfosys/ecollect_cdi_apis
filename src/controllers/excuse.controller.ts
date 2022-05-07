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
import {Excuse} from '../models';
import {ExcuseRepository} from '../repositories';

export class ExcuseController {
  constructor(
    @repository(ExcuseRepository)
    public excuseRepository : ExcuseRepository,
  ) {}

  @post('/nodeapi/excuses')
  @response(200, {
    description: 'Excuse model instance',
    content: {'application/json': {schema: getModelSchemaRef(Excuse)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Excuse, {
            title: 'NewExcuse',
            exclude: ['id'],
          }),
        },
      },
    })
    excuse: Omit<Excuse, 'id'>,
  ): Promise<Excuse> {
    return this.excuseRepository.create(excuse);
  }

  @get('/nodeapi/excuses/count')
  @response(200, {
    description: 'Excuse model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Excuse) where?: Where<Excuse>,
  ): Promise<Count> {
    return this.excuseRepository.count(where);
  }

  @get('/nodeapi/excuses')
  @response(200, {
    description: 'Array of Excuse model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Excuse, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Excuse) filter?: Filter<Excuse>,
  ): Promise<Excuse[]> {
    return this.excuseRepository.find(filter);
  }

  @patch('/nodeapi/excuses')
  @response(200, {
    description: 'Excuse PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Excuse, {partial: true}),
        },
      },
    })
    excuse: Excuse,
    @param.where(Excuse) where?: Where<Excuse>,
  ): Promise<Count> {
    return this.excuseRepository.updateAll(excuse, where);
  }

  @get('/nodeapi/excuses/{id}')
  @response(200, {
    description: 'Excuse model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Excuse, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Excuse, {exclude: 'where'}) filter?: FilterExcludingWhere<Excuse>
  ): Promise<Excuse> {
    return this.excuseRepository.findById(id, filter);
  }

  @patch('/nodeapi/excuses/{id}')
  @response(204, {
    description: 'Excuse PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Excuse, {partial: true}),
        },
      },
    })
    excuse: Excuse,
  ): Promise<void> {
    await this.excuseRepository.updateById(id, excuse);
  }

  @put('/nodeapi/excuses/{id}')
  @response(204, {
    description: 'Excuse PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() excuse: Excuse,
  ): Promise<void> {
    await this.excuseRepository.replaceById(id, excuse);
  }

  @del('/nodeapi/excuses/{id}')
  @response(204, {
    description: 'Excuse DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.excuseRepository.deleteById(id);
  }
}
