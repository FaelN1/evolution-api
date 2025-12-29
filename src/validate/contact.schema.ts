import { JSONSchema7 } from 'json-schema';

export const saveContactSchema: JSONSchema7 = {
  $id: 'https://evolution-api.com/schemas/contact/save.json',
  type: 'object',
  properties: {
    number: { type: 'string', minLength: 1 },
    name: { type: 'string', minLength: 1 },
    saveOnDevice: { type: 'boolean', description: 'Defaults to true when not provided.' },
  },
  required: ['number', 'name'],
};
