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
import {Sms} from '../models';
import {SmsRepository} from '../repositories';

export class SmsController {
  constructor(
    @repository(SmsRepository)
    public smsRepository : SmsRepository,
  ) {}

  @post('/nodeapi/sms')
  @response(200, {
    description: 'Sms model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sms)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sms, {
            title: 'NewSms',
            exclude: ['id'],
          }),
        },
      },
    })
    sms: Omit<Sms, 'id'>,
  ): Promise<Sms> {
    return this.smsRepository.create(sms);
  }

  @get('/nodeapi/sms/count')
  @response(200, {
    description: 'Sms model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sms) where?: Where<Sms>,
  ): Promise<Count> {
    return this.smsRepository.count(where);
  }

  @get('/nodeapi/sms')
  @response(200, {
    description: 'Array of Sms model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sms, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sms) filter?: Filter<Sms>,
  ): Promise<Sms[]> {
    return this.smsRepository.find(filter);
  }

  @patch('/nodeapi/sms')
  @response(200, {
    description: 'Sms PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sms, {partial: true}),
        },
      },
    })
    sms: Sms,
    @param.where(Sms) where?: Where<Sms>,
  ): Promise<Count> {
    return this.smsRepository.updateAll(sms, where);
  }

  @get('/nodeapi/sms/{id}')
  @response(200, {
    description: 'Sms model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sms, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sms, {exclude: 'where'}) filter?: FilterExcludingWhere<Sms>
  ): Promise<Sms> {
    return this.smsRepository.findById(id, filter);
  }

  @patch('/nodeapi/sms/{id}')
  @response(204, {
    description: 'Sms PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sms, {partial: true}),
        },
      },
    })
    sms: Sms,
  ): Promise<void> {
    await this.smsRepository.updateById(id, sms);
  }

  @put('/nodeapi/sms/{id}')
  @response(204, {
    description: 'Sms PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sms: Sms,
  ): Promise<void> {
    await this.smsRepository.replaceById(id, sms);
  }

  @del('/nodeapi/sms/{id}')
  @response(204, {
    description: 'Sms DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.smsRepository.deleteById(id);
  }
}
