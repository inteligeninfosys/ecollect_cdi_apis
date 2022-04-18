import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      schema: 'ecol',
      table: "signininvites"
    }
  }
})
export class Signininvites extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
  })
  emailaddress?: string;

  @property({
    type: 'date',
  })
  invitedate?: string;

  @property({
    type: 'string',
  })
  inviteexpiry?: string;

  @property({
    type: 'string',
  })
  inviteby?: string;

  @property({
    type: 'string',
  })
  completed?: string;

  @property({
    type: 'string',
  })
  invitetype?: string;

  @property({
    type: 'date',
  })
  lastupdate?: string;


  constructor(data?: Partial<Signininvites>) {
    super(data);
  }
}

export interface SignininvitesRelations {
  // describe navigational properties here
}

export type SignininvitesWithRelations = Signininvites & SignininvitesRelations;
