import { FieldSet, Record, Records } from 'airtable';
import { TMinifyRecord } from '../types/airtable';

export const getMinifiedRecords = <T>(records: Records<Partial<T & FieldSet>>): TMinifyRecord<T>[] => records.map((record) => minifyRecord(record));

export const minifyRecord = <T>(record: Record<T & FieldSet>): TMinifyRecord<T> => ({
  id: record.id,
  fields: record.fields,
});
