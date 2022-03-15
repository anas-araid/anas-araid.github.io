import { Records, Record } from 'airtable';
import { TPostsFieldSet, TMinifyRecord } from '../types/airtable';

export const getMinifiedRecords = (records: Records<Partial<TPostsFieldSet>>): TMinifyRecord<TPostsFieldSet>[] => records.map((record) => minifyRecord(record));

export const minifyRecord = (record: Record<Partial<TPostsFieldSet>>): TMinifyRecord<TPostsFieldSet> => ({
  id: record.id,
  fields: record.fields,
});
