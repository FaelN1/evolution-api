import { RouterBroker } from '@api/abstract/abstract.router';
import { SaveContactDto } from '@api/dto/contact.dto';
import { contactController } from '@api/server.module';
import { saveContactSchema } from '@validate/contact.schema';
import { RequestHandler, Router } from 'express';

import { HttpStatus } from './index.router';

export class ContactRouter extends RouterBroker {
  constructor(...guards: RequestHandler[]) {
    super();
    this.router.post(this.routerPath('save'), ...guards, async (req, res) => {
      try {
        const response = await this.dataValidate<SaveContactDto>({
          request: req,
          schema: saveContactSchema,
          ClassRef: SaveContactDto,
          execute: (instance, data) => contactController.saveContact(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json(error);
      }
    });
  }

  public readonly router: Router = Router();
}
