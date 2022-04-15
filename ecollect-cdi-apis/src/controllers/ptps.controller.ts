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
import {Ptps} from '../models';
import {PtpsRepository} from '../repositories';

export class PtpsController {
  constructor(
    @repository(PtpsRepository)
    public ptpsRepository : PtpsRepository,
  ) {}

  @post('/nodeapi/ptps')
  @response(200, {
    description: 'Ptps model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ptps)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ptps, {
            title: 'NewPtps',
            exclude: ['id'],
          }),
        },
      },
    })
    ptps: Omit<Ptps, 'id'>,
  ): Promise<Ptps> {
    return this.ptpsRepository.create(ptps);
  }

  @get('/nodeapi/ptps/count')
  @response(200, {
    description: 'Ptps model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ptps) where?: Where<Ptps>,
  ): Promise<Count> {
    return this.ptpsRepository.count(where);
  }

  @get('/nodeapi/ptps')
  @response(200, {
    description: 'Array of Ptps model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ptps, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ptps) filter?: Filter<Ptps>,
  ): Promise<Ptps[]> {
    return this.ptpsRepository.find(filter);
  }

  @patch('/nodeapi/ptps')
  @response(200, {
    description: 'Ptps PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ptps, {partial: true}),
        },
      },
    })
    ptps: Ptps,
    @param.where(Ptps) where?: Where<Ptps>,
  ): Promise<Count> {
    return this.ptpsRepository.updateAll(ptps, where);
  }

  @get('/nodeapi/ptps/{id}')
  @response(200, {
    description: 'Ptps model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ptps, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ptps, {exclude: 'where'}) filter?: FilterExcludingWhere<Ptps>
  ): Promise<Ptps> {
    return this.ptpsRepository.findById(id, filter);
  }

  @patch('/nodeapi/ptps/{id}')
  @response(204, {
    description: 'Ptps PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ptps, {partial: true}),
        },
      },
    })
    ptps: Ptps,
  ): Promise<void> {
    await this.ptpsRepository.updateById(id, ptps);
  }

  @put('/nodeapi/ptps/{id}')
  @response(204, {
    description: 'Ptps PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ptps: Ptps,
  ): Promise<void> {
    await this.ptpsRepository.replaceById(id, ptps);
  }

  @del('/nodeapi/ptps/{id}')
  @response(204, {
    description: 'Ptps DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ptpsRepository.deleteById(id);
  }
}
