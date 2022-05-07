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
import {Teles} from '../models';
import {TelesRepository} from '../repositories';

export class TelesController {
  constructor(
    @repository(TelesRepository)
    public telesRepository : TelesRepository,
  ) {}

  @post('/nodeapi/teles')
  @response(200, {
    description: 'Teles model instance',
    content: {'application/json': {schema: getModelSchemaRef(Teles)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teles, {
            title: 'NewTeles',
            exclude: ['id'],
          }),
        },
      },
    })
    teles: Omit<Teles, 'id'>,
  ): Promise<Teles> {
    return this.telesRepository.create(teles);
  }

  @get('/nodeapi/teles/count')
  @response(200, {
    description: 'Teles model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Teles) where?: Where<Teles>,
  ): Promise<Count> {
    return this.telesRepository.count(where);
  }

  @get('/nodeapi/teles')
  @response(200, {
    description: 'Array of Teles model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Teles, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Teles) filter?: Filter<Teles>,
  ): Promise<Teles[]> {
    return this.telesRepository.find(filter);
  }

  @patch('/nodeapi/teles')
  @response(200, {
    description: 'Teles PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teles, {partial: true}),
        },
      },
    })
    teles: Teles,
    @param.where(Teles) where?: Where<Teles>,
  ): Promise<Count> {
    return this.telesRepository.updateAll(teles, where);
  }

  @get('/nodeapi/teles/{id}')
  @response(200, {
    description: 'Teles model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Teles, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Teles, {exclude: 'where'}) filter?: FilterExcludingWhere<Teles>
  ): Promise<Teles> {
    return this.telesRepository.findById(id, filter);
  }

  @patch('/nodeapi/teles/{id}')
  @response(204, {
    description: 'Teles PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teles, {partial: true}),
        },
      },
    })
    teles: Teles,
  ): Promise<void> {
    await this.telesRepository.updateById(id, teles);
  }

  @put('/nodeapi/teles/{id}')
  @response(204, {
    description: 'Teles PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() teles: Teles,
  ): Promise<void> {
    await this.telesRepository.replaceById(id, teles);
  }

  @del('/nodeapi/teles/{id}')
  @response(204, {
    description: 'Teles DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.telesRepository.deleteById(id);
  }
}
