import { FieldSet, Records } from 'airtable';
import { table } from '../lib/airtable';
const SETTINGS = 'settings';

export const getActivePages = async (): Promise<Promise<Records<FieldSet>>> =>
  await table(SETTINGS)
    .select({ fields: ['name', 'isActive'], view: 'Grid view' })
    .all();
