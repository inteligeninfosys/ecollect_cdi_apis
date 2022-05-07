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
import {Banks} from '../models';
import {BanksRepository} from '../repositories';

export class BanksController {
  constructor(
    @repository(BanksRepository)
    public banksRepository : BanksRepository,
  ) {}

  @post('/nodeapi/banks')
  @response(200, {
    description: 'Banks model instance',
    content: {'application/json': {schema: getModelSchemaRef(Banks)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Banks, {
            title: 'NewBanks',
            
          }),
        },
      },
    })
    banks: Banks,
  ): Promise<Banks> {
    return this.banksRepository.create(banks);
  }

  @get('/nodeapi/banks/count')
  @response(200, {
    description: 'Banks model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Banks) where?: Where<Banks>,
  ): Promise<Count> {
    return this.banksRepository.count(where);
  }

  @get('/nodeapi/banks')
  @response(200, {
    description: 'Array of Banks model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Banks, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Banks) filter?: Filter<Banks>,
  ): Promise<Banks[]> {
    return this.banksRepository.find(filter);
  }

  @patch('/nodeapi/banks')
  @response(200, {
    description: 'Banks PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Banks, {partial: true}),
        },
      },
    })
    banks: Banks,
    @param.where(Banks) where?: Where<Banks>,
  ): Promise<Count> {
    return this.banksRepository.updateAll(banks, where);
  }

  @get('/nodeapi/banks/{id}')
  @response(200, {
    description: 'Banks model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Banks, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Banks, {exclude: 'where'}) filter?: FilterExcludingWhere<Banks>
  ): Promise<Banks> {
    return this.banksRepository.findById(id, filter);
  }

  @patch('/nodeapi/banks/{id}')
  @response(204, {
    description: 'Banks PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Banks, {partial: true}),
        },
      },
    })
    banks: Banks,
  ): Promise<void> {
    await this.banksRepository.updateById(id, banks);
  }

  @put('/nodeapi/banks/{id}')
  @response(204, {
    description: 'Banks PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() banks: Banks,
  ): Promise<void> {
    await this.banksRepository.replaceById(id, banks);
  }

  @del('/nodeapi/banks/{id}')
  @response(204, {
    description: 'Banks DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.banksRepository.deleteById(id);
  }
}
