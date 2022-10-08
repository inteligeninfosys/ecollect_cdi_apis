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
import {ImportAccounts} from '../models';
import {ImportAccountsRepository} from '../repositories';

export class ImportaccountsController {
  constructor(
    @repository(ImportAccountsRepository)
    public importAccountsRepository: ImportAccountsRepository,
  ) { }

  @post('/nodeapi/import-accounts')
  @response(200, {
    description: 'ImportAccounts model instance',
    content: {'application/json': {schema: getModelSchemaRef(ImportAccounts)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImportAccounts, {
            title: 'NewImportAccounts',

          }),
        },
      },
    })
    importAccounts: ImportAccounts,
  ): Promise<ImportAccounts> {
    return this.importAccountsRepository.create(importAccounts);
  }

  @get('/nodeapi/import-accounts/count')
  @response(200, {
    description: 'ImportAccounts model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ImportAccounts) where?: Where<ImportAccounts>,
  ): Promise<Count> {
    return this.importAccountsRepository.count(where);
  }

  @get('/nodeapi/import-accounts')
  @response(200, {
    description: 'Array of ImportAccounts model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ImportAccounts, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ImportAccounts) filter?: Filter<ImportAccounts>,
  ): Promise<ImportAccounts[]> {
    return this.importAccountsRepository.find(filter);
  }

  @patch('/nodeapi/import-accounts')
  @response(200, {
    description: 'ImportAccounts PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImportAccounts, {partial: true}),
        },
      },
    })
    importAccounts: ImportAccounts,
    @param.where(ImportAccounts) where?: Where<ImportAccounts>,
  ): Promise<Count> {
    return this.importAccountsRepository.updateAll(importAccounts, where);
  }

  @get('/nodeapi/import-accounts/{id}')
  @response(200, {
    description: 'ImportAccounts model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ImportAccounts, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ImportAccounts, {exclude: 'where'}) filter?: FilterExcludingWhere<ImportAccounts>
  ): Promise<ImportAccounts> {
    return this.importAccountsRepository.findById(id, filter);
  }

  ///nodeapi/import-accounts/106745
  @patch('/nodeapi/import-accounts/{id}')
  @response(204, {
    description: 'ImportAccounts PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImportAccounts, {partial: true}),
        },
      },
    })
    importAccounts: ImportAccounts,
  ): Promise<void> {
    await this.importAccountsRepository.updateById(id, importAccounts);
  }

  @put('/nodeapi/import-accounts/{id}')
  @response(204, {
    description: 'ImportAccounts PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() importAccounts: ImportAccounts,
  ): Promise<void> {
    await this.importAccountsRepository.replaceById(id, importAccounts);
  }

  @del('/nodeapi/import-accounts/{id}')
  @response(204, {
    description: 'ImportAccounts DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.importAccountsRepository.deleteById(id);
  }
}
