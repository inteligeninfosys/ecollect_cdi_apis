import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import {MysqlDataSource} from './datasources';

export {ApplicationConfig};

export class EcollectCdiApisApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    const db_host = process.env.DB_HOST ?? '127.0.0.1';
    const db_port = process.env.DB_PORT ?? 3360;
    const db_user = process.env.DB_USERNAME ?? 'root';
    const db_pass = process.env.DB_PASSWORD ?? 'abc.123';
    const database = process.env.DB_DATABASE ?? 'ecol';

    this.bind('datasources.config.mysql').to({
      name: 'mysql',
      connector: 'mysql',
      url: '',
      host: db_host,
      port: db_port,
      user: db_user,
      password: db_pass,
      database: database,
      useNewUrlParser: true,
      maxOfflineRequests: 20
    });
    this.bind('datasources.mysql').toClass(MysqlDataSource);


    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
