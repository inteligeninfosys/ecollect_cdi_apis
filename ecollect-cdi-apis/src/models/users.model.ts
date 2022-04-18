import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "tblusers"
    }
  }
})
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  username: string;

  @property({
    type: 'string',
  })
  firstname?: string;

  @property({
    type: 'string',
  })
  surname?: string;

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'date',
  })
  createdate?: string;

  @property({
    type: 'string',
  })
  lastlogin?: string;

  @property({
    type: 'string',
  })
  role?: string;

  @property({
    type: 'string',
  })
  loggedin?: string;

  @property({
    type: 'date',
  })
  lastupdate?: string;

  @property({
    type: 'string',
  })
  emailaddress?: string;

  @property({
    type: 'string',
  })
  active?: string;

  @property({
    type: 'string',
  })
  lastupdateby?: string;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
