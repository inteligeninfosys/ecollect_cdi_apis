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
import {Xlsimports} from '../models';
import {XlsimportsRepository} from '../repositories';

export class XlsimportsController {
  constructor(
    @repository(XlsimportsRepository)
    public xlsimportsRepository : XlsimportsRepository,
  ) {}

  @post('/nodeapi/xlsimports')
  @response(200, {
    description: 'Xlsimports model instance',
    content: {'application/json': {schema: getModelSchemaRef(Xlsimports)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Xlsimports, {
            title: 'NewXlsimports',
            exclude: ['id'],
          }),
        },
      },
    })
    xlsimports: Omit<Xlsimports, 'id'>,
  ): Promise<Xlsimports> {
    return this.xlsimportsRepository.create(xlsimports);
  }

  @get('/nodeapi/xlsimports/count')
  @response(200, {
    description: 'Xlsimports model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Xlsimports) where?: Where<Xlsimports>,
  ): Promise<Count> {
    return this.xlsimportsRepository.count(where);
  }

  @get('/nodeapi/xlsimports')
  @response(200, {
    description: 'Array of Xlsimports model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Xlsimports, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Xlsimports) filter?: Filter<Xlsimports>,
  ): Promise<Xlsimports[]> {
    return this.xlsimportsRepository.find(filter);
  }

  @patch('/nodeapi/xlsimports')
  @response(200, {
    description: 'Xlsimports PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Xlsimports, {partial: true}),
        },
      },
    })
    xlsimports: Xlsimports,
    @param.where(Xlsimports) where?: Where<Xlsimports>,
  ): Promise<Count> {
    return this.xlsimportsRepository.updateAll(xlsimports, where);
  }

  @get('/nodeapi/xlsimports/{id}')
  @response(200, {
    description: 'Xlsimports model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Xlsimports, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Xlsimports, {exclude: 'where'}) filter?: FilterExcludingWhere<Xlsimports>
  ): Promise<Xlsimports> {
    return this.xlsimportsRepository.findById(id, filter);
  }

  @patch('/nodeapi/xlsimports/{id}')
  @response(204, {
    description: 'Xlsimports PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Xlsimports, {partial: true}),
        },
      },
    })
    xlsimports: Xlsimports,
  ): Promise<void> {
    await this.xlsimportsRepository.updateById(id, xlsimports);
  }

  @put('/nodeapi/xlsimports/{id}')
  @response(204, {
    description: 'Xlsimports PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() xlsimports: Xlsimports,
  ): Promise<void> {
    await this.xlsimportsRepository.replaceById(id, xlsimports);
  }

  @del('/nodeapi/xlsimports/{id}')
  @response(204, {
    description: 'Xlsimports DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.xlsimportsRepository.deleteById(id);
  }
}
