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
import {Notehis} from '../models';
import {NotehisRepository} from '../repositories';

export class NotehisController {
  constructor(
    @repository(NotehisRepository)
    public notehisRepository : NotehisRepository,
  ) {}

  @post('/nodeapi/notehis')
  @response(200, {
    description: 'Notehis model instance',
    content: {'application/json': {schema: getModelSchemaRef(Notehis)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notehis, {
            title: 'NewNotehis',
            exclude: ['id'],
          }),
        },
      },
    })
    notehis: Omit<Notehis, 'id'>,
  ): Promise<Notehis> {
    return this.notehisRepository.create(notehis);
  }

  @get('/nodeapi/notehis/count')
  @response(200, {
    description: 'Notehis model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Notehis) where?: Where<Notehis>,
  ): Promise<Count> {
    return this.notehisRepository.count(where);
  }

  @get('/nodeapi/notehis')
  @response(200, {
    description: 'Array of Notehis model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Notehis, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Notehis) filter?: Filter<Notehis>,
  ): Promise<Notehis[]> {
    return this.notehisRepository.find(filter);
  }

  @patch('/nodeapi/notehis')
  @response(200, {
    description: 'Notehis PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notehis, {partial: true}),
        },
      },
    })
    notehis: Notehis,
    @param.where(Notehis) where?: Where<Notehis>,
  ): Promise<Count> {
    return this.notehisRepository.updateAll(notehis, where);
  }

  @get('/nodeapi/notehis/{id}')
  @response(200, {
    description: 'Notehis model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Notehis, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Notehis, {exclude: 'where'}) filter?: FilterExcludingWhere<Notehis>
  ): Promise<Notehis> {
    return this.notehisRepository.findById(id, filter);
  }

  @patch('/nodeapi/notehis/{id}')
  @response(204, {
    description: 'Notehis PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notehis, {partial: true}),
        },
      },
    })
    notehis: Notehis,
  ): Promise<void> {
    await this.notehisRepository.updateById(id, notehis);
  }

  @put('/nodeapi/notehis/{id}')
  @response(204, {
    description: 'Notehis PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() notehis: Notehis,
  ): Promise<void> {
    await this.notehisRepository.replaceById(id, notehis);
  }

  @del('/nodeapi/notehis/{id}')
  @response(204, {
    description: 'Notehis DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.notehisRepository.deleteById(id);
  }
}
