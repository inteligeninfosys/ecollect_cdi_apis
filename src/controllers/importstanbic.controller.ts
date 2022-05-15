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
import {ImportStanbic} from '../models';
import {ImportStanbicRepository} from '../repositories';

export class ImportstanbicController {
  constructor(
    @repository(ImportStanbicRepository)
    public importStanbicRepository: ImportStanbicRepository,
  ) { }

  @post('/nodeapi/import-stanbic')
  @response(200, {
    description: 'ImportStanbic model instance',
    content: {'application/json': {schema: getModelSchemaRef(ImportStanbic)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImportStanbic, {
            title: 'NewImportStanbic',

          }),
        },
      },
    })
    importStanbic: ImportStanbic,
  ): Promise<ImportStanbic> {
    return this.importStanbicRepository.create(importStanbic);
  }

  @get('/nodeapi/import-stanbic/count')
  @response(200, {
    description: 'ImportStanbic model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ImportStanbic) where?: Where<ImportStanbic>,
  ): Promise<Count> {
    return this.importStanbicRepository.count(where);
  }

  @get('/nodeapi/import-stanbic')
  @response(200, {
    description: 'Array of ImportStanbic model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ImportStanbic, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ImportStanbic) filter?: Filter<ImportStanbic>,
  ): Promise<ImportStanbic[]> {
    return this.importStanbicRepository.find(filter);
  }

  @patch('/nodeapi/import-stanbic')
  @response(200, {
    description: 'ImportStanbic PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImportStanbic, {partial: true}),
        },
      },
    })
    importStanbic: ImportStanbic,
    @param.where(ImportStanbic) where?: Where<ImportStanbic>,
  ): Promise<Count> {
    return this.importStanbicRepository.updateAll(importStanbic, where);
  }

  @get('/nodeapi/import-stanbic/{id}')
  @response(200, {
    description: 'ImportStanbic model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ImportStanbic, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ImportStanbic, {exclude: 'where'}) filter?: FilterExcludingWhere<ImportStanbic>
  ): Promise<ImportStanbic> {
    return this.importStanbicRepository.findById(id, filter);
  }

  @patch('/nodeapi/import-stanbic/{id}')
  @response(204, {
    description: 'ImportStanbic PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImportStanbic, {partial: true}),
        },
      },
    })
    importStanbic: ImportStanbic,
  ): Promise<void> {
    await this.importStanbicRepository.updateById(id, importStanbic);
  }

  @put('/nodeapi/import-stanbic/{id}')
  @response(204, {
    description: 'ImportStanbic PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() importStanbic: ImportStanbic,
  ): Promise<void> {
    await this.importStanbicRepository.replaceById(id, importStanbic);
  }

  @del('/nodeapi/import-stanbic/{id}')
  @response(204, {
    description: 'ImportStanbic DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.importStanbicRepository.deleteById(id);
  }
}
