import { JSONSchema7 } from 'json-schema';
import { v4 } from 'uuid';

export const saveContactSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    number: { type: 'string' },
    name: { type: 'string' },
    saveOnDevice: { type: 'boolean', default: true },
  },
  required: ['number', 'name'],
};
