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
import {Vendorcommentshistory} from '../models';
import {VendorcommentshistoryRepository} from '../repositories';

export class VendorcommentshistoryController {
  constructor(
    @repository(VendorcommentshistoryRepository)
    public vendorcommentshistoryRepository: VendorcommentshistoryRepository,
  ) { }

  @post('/nodeapi/vendorcommentshistories')
  @response(200, {
    description: 'Vendorcommentshistory model instance',
    content: {'application/json': {schema: getModelSchemaRef(Vendorcommentshistory)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vendorcommentshistory, {
            title: 'NewVendorcommentshistory',
            exclude: ['id'],
          }),
        },
      },
    })
    vendorcommentshistory: Omit<Vendorcommentshistory, 'id'>,
  ): Promise<Vendorcommentshistory> {
    return this.vendorcommentshistoryRepository.create(vendorcommentshistory);
  }

  @get('/nodeapi/vendorcommentshistories/count')
  @response(200, {
    description: 'Vendorcommentshistory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Vendorcommentshistory) where?: Where<Vendorcommentshistory>,
  ): Promise<Count> {
    return this.vendorcommentshistoryRepository.count(where);
  }

  @get('/nodeapi/vendorcommentshistories')
  @response(200, {
    description: 'Array of Vendorcommentshistory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Vendorcommentshistory, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Vendorcommentshistory) filter?: Filter<Vendorcommentshistory>,
  ): Promise<Vendorcommentshistory[]> {
    return this.vendorcommentshistoryRepository.find(filter);
  }

  @patch('/nodeapi/vendorcommentshistories')
  @response(200, {
    description: 'Vendorcommentshistory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vendorcommentshistory, {partial: true}),
        },
      },
    })
    vendorcommentshistory: Vendorcommentshistory,
    @param.where(Vendorcommentshistory) where?: Where<Vendorcommentshistory>,
  ): Promise<Count> {
    return this.vendorcommentshistoryRepository.updateAll(vendorcommentshistory, where);
  }

  @get('/nodeapi/vendorcommentshistories/{id}')
  @response(200, {
    description: 'Vendorcommentshistory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Vendorcommentshistory, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Vendorcommentshistory, {exclude: 'where'}) filter?: FilterExcludingWhere<Vendorcommentshistory>
  ): Promise<Vendorcommentshistory> {
    return this.vendorcommentshistoryRepository.findById(id, filter);
  }

  @patch('/nodeapi/vendorcommentshistories/{id}')
  @response(204, {
    description: 'Vendorcommentshistory PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vendorcommentshistory, {partial: true}),
        },
      },
    })
    vendorcommentshistory: Vendorcommentshistory,
  ): Promise<void> {
    await this.vendorcommentshistoryRepository.updateById(id, vendorcommentshistory);
  }

  @put('/nodeapi/vendorcommentshistories/{id}')
  @response(204, {
    description: 'Vendorcommentshistory PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vendorcommentshistory: Vendorcommentshistory,
  ): Promise<void> {
    await this.vendorcommentshistoryRepository.replaceById(id, vendorcommentshistory);
  }

  @del('/nodeapi/vendorcommentshistories/{id}')
  @response(204, {
    description: 'Vendorcommentshistory DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vendorcommentshistoryRepository.deleteById(id);
  }
}
