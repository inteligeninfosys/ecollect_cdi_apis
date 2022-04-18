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
import {Signininvites} from '../models';
import {SignininvitesRepository} from '../repositories';

export class SignininvitesController {
  constructor(
    @repository(SignininvitesRepository)
    public signininvitesRepository : SignininvitesRepository,
  ) {}

  @post('/nodeapi/signininvites')
  @response(200, {
    description: 'Signininvites model instance',
    content: {'application/json': {schema: getModelSchemaRef(Signininvites)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Signininvites, {
            title: 'NewSignininvites',
            exclude: ['id'],
          }),
        },
      },
    })
    signininvites: Omit<Signininvites, 'id'>,
  ): Promise<Signininvites> {
    return this.signininvitesRepository.create(signininvites);
  }

  @get('/nodeapi/signininvites/count')
  @response(200, {
    description: 'Signininvites model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Signininvites) where?: Where<Signininvites>,
  ): Promise<Count> {
    return this.signininvitesRepository.count(where);
  }

  @get('/nodeapi/signininvites')
  @response(200, {
    description: 'Array of Signininvites model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Signininvites, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Signininvites) filter?: Filter<Signininvites>,
  ): Promise<Signininvites[]> {
    return this.signininvitesRepository.find(filter);
  }

  @patch('/nodeapi/signininvites')
  @response(200, {
    description: 'Signininvites PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Signininvites, {partial: true}),
        },
      },
    })
    signininvites: Signininvites,
    @param.where(Signininvites) where?: Where<Signininvites>,
  ): Promise<Count> {
    return this.signininvitesRepository.updateAll(signininvites, where);
  }

  @get('/nodeapi/signininvites/{id}')
  @response(200, {
    description: 'Signininvites model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Signininvites, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Signininvites, {exclude: 'where'}) filter?: FilterExcludingWhere<Signininvites>
  ): Promise<Signininvites> {
    return this.signininvitesRepository.findById(id, filter);
  }

  @patch('/nodeapi/signininvites/{id}')
  @response(204, {
    description: 'Signininvites PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Signininvites, {partial: true}),
        },
      },
    })
    signininvites: Signininvites,
  ): Promise<void> {
    await this.signininvitesRepository.updateById(id, signininvites);
  }

  @put('/nodeapi/signininvites/{id}')
  @response(204, {
    description: 'Signininvites PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() signininvites: Signininvites,
  ): Promise<void> {
    await this.signininvitesRepository.replaceById(id, signininvites);
  }

  @del('/nodeapi/signininvites/{id}')
  @response(204, {
    description: 'Signininvites DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.signininvitesRepository.deleteById(id);
  }
}
