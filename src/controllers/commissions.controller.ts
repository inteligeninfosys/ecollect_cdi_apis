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
import {Commissions} from '../models';
import {CommissionsRepository} from '../repositories';

export class CommissionsController {
  constructor(
    @repository(CommissionsRepository)
    public commissionsRepository : CommissionsRepository,
  ) {}

  @post('/nodeapi/commissions')
  @response(200, {
    description: 'Commissions model instance',
    content: {'application/json': {schema: getModelSchemaRef(Commissions)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commissions, {
            title: 'NewCommissions',
            exclude: ['id'],
          }),
        },
      },
    })
    commissions: Omit<Commissions, 'id'>,
  ): Promise<Commissions> {
    return this.commissionsRepository.create(commissions);
  }

  @get('/nodeapi/commissions/count')
  @response(200, {
    description: 'Commissions model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Commissions) where?: Where<Commissions>,
  ): Promise<Count> {
    return this.commissionsRepository.count(where);
  }

  @get('/nodeapi/commissions')
  @response(200, {
    description: 'Array of Commissions model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Commissions, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Commissions) filter?: Filter<Commissions>,
  ): Promise<Commissions[]> {
    return this.commissionsRepository.find(filter);
  }

  @patch('/nodeapi/commissions')
  @response(200, {
    description: 'Commissions PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commissions, {partial: true}),
        },
      },
    })
    commissions: Commissions,
    @param.where(Commissions) where?: Where<Commissions>,
  ): Promise<Count> {
    return this.commissionsRepository.updateAll(commissions, where);
  }

  @get('/nodeapi/commissions/{id}')
  @response(200, {
    description: 'Commissions model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Commissions, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Commissions, {exclude: 'where'}) filter?: FilterExcludingWhere<Commissions>
  ): Promise<Commissions> {
    return this.commissionsRepository.findById(id, filter);
  }

  @patch('/nodeapi/commissions/{id}')
  @response(204, {
    description: 'Commissions PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commissions, {partial: true}),
        },
      },
    })
    commissions: Commissions,
  ): Promise<void> {
    await this.commissionsRepository.updateById(id, commissions);
  }

  @put('/nodeapi/commissions/{id}')
  @response(204, {
    description: 'Commissions PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() commissions: Commissions,
  ): Promise<void> {
    await this.commissionsRepository.replaceById(id, commissions);
  }

  @del('/nodeapi/commissions/{id}')
  @response(204, {
    description: 'Commissions DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.commissionsRepository.deleteById(id);
  }
}
