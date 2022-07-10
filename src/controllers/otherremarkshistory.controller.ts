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
import {Otherremarkshistory} from '../models';
import {OtherremarkshistoryRepository} from '../repositories';

export class OtherremarkshistoryController {
  constructor(
    @repository(OtherremarkshistoryRepository)
    public otherremarkshistoryRepository: OtherremarkshistoryRepository,
  ) { }

  @post('/nodeapi/otherremarkshistories')
  @response(200, {
    description: 'Otherremarkshistory model instance',
    content: {'application/json': {schema: getModelSchemaRef(Otherremarkshistory)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Otherremarkshistory, {
            title: 'NewOtherremarkshistory',
            exclude: ['id'],
          }),
        },
      },
    })
    otherremarkshistory: Omit<Otherremarkshistory, 'id'>,
  ): Promise<Otherremarkshistory> {
    return this.otherremarkshistoryRepository.create(otherremarkshistory);
  }

  @get('/nodeapi/otherremarkshistories/count')
  @response(200, {
    description: 'Otherremarkshistory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Otherremarkshistory) where?: Where<Otherremarkshistory>,
  ): Promise<Count> {
    return this.otherremarkshistoryRepository.count(where);
  }

  @get('/nodeapi/otherremarkshistories')
  @response(200, {
    description: 'Array of Otherremarkshistory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Otherremarkshistory, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Otherremarkshistory) filter?: Filter<Otherremarkshistory>,
  ): Promise<Otherremarkshistory[]> {
    return this.otherremarkshistoryRepository.find(filter);
  }

  @patch('/nodeapi/otherremarkshistories')
  @response(200, {
    description: 'Otherremarkshistory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Otherremarkshistory, {partial: true}),
        },
      },
    })
    otherremarkshistory: Otherremarkshistory,
    @param.where(Otherremarkshistory) where?: Where<Otherremarkshistory>,
  ): Promise<Count> {
    return this.otherremarkshistoryRepository.updateAll(otherremarkshistory, where);
  }

  @get('/nodeapi/otherremarkshistories/{id}')
  @response(200, {
    description: 'Otherremarkshistory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Otherremarkshistory, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Otherremarkshistory, {exclude: 'where'}) filter?: FilterExcludingWhere<Otherremarkshistory>
  ): Promise<Otherremarkshistory> {
    return this.otherremarkshistoryRepository.findById(id, filter);
  }

  @patch('/nodeapi/otherremarkshistories/{id}')
  @response(204, {
    description: 'Otherremarkshistory PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Otherremarkshistory, {partial: true}),
        },
      },
    })
    otherremarkshistory: Otherremarkshistory,
  ): Promise<void> {
    await this.otherremarkshistoryRepository.updateById(id, otherremarkshistory);
  }

  @put('/nodeapi/otherremarkshistories/{id}')
  @response(204, {
    description: 'Otherremarkshistory PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() otherremarkshistory: Otherremarkshistory,
  ): Promise<void> {
    await this.otherremarkshistoryRepository.replaceById(id, otherremarkshistory);
  }

  @del('/nodeapi/otherremarkshistories/{id}')
  @response(204, {
    description: 'Otherremarkshistory DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.otherremarkshistoryRepository.deleteById(id);
  }
}
