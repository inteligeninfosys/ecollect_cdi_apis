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
import {Uploads} from '../models';
import {UploadsRepository} from '../repositories';

export class UploadsController {
  constructor(
    @repository(UploadsRepository)
    public uploadsRepository : UploadsRepository,
  ) {}

  @post('/nodeapi/uploads')
  @response(200, {
    description: 'Uploads model instance',
    content: {'application/json': {schema: getModelSchemaRef(Uploads)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uploads, {
            title: 'NewUploads',
            exclude: ['id'],
          }),
        },
      },
    })
    uploads: Omit<Uploads, 'id'>,
  ): Promise<Uploads> {
    return this.uploadsRepository.create(uploads);
  }

  @get('/nodeapi/uploads/count')
  @response(200, {
    description: 'Uploads model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Uploads) where?: Where<Uploads>,
  ): Promise<Count> {
    return this.uploadsRepository.count(where);
  }

  @get('/nodeapi/uploads')
  @response(200, {
    description: 'Array of Uploads model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Uploads, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Uploads) filter?: Filter<Uploads>,
  ): Promise<Uploads[]> {
    return this.uploadsRepository.find(filter);
  }

  @patch('/nodeapi/uploads')
  @response(200, {
    description: 'Uploads PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uploads, {partial: true}),
        },
      },
    })
    uploads: Uploads,
    @param.where(Uploads) where?: Where<Uploads>,
  ): Promise<Count> {
    return this.uploadsRepository.updateAll(uploads, where);
  }

  @get('/nodeapi/uploads/{id}')
  @response(200, {
    description: 'Uploads model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Uploads, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Uploads, {exclude: 'where'}) filter?: FilterExcludingWhere<Uploads>
  ): Promise<Uploads> {
    return this.uploadsRepository.findById(id, filter);
  }

  @patch('/nodeapi/uploads/{id}')
  @response(204, {
    description: 'Uploads PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uploads, {partial: true}),
        },
      },
    })
    uploads: Uploads,
  ): Promise<void> {
    await this.uploadsRepository.updateById(id, uploads);
  }

  @put('/nodeapi/uploads/{id}')
  @response(204, {
    description: 'Uploads PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() uploads: Uploads,
  ): Promise<void> {
    await this.uploadsRepository.replaceById(id, uploads);
  }

  @del('/nodeapi/uploads/{id}')
  @response(204, {
    description: 'Uploads DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.uploadsRepository.deleteById(id);
  }
}
