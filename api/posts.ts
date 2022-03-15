import { table } from '../lib/airtable';
import { TMinifyRecord, TPostsFieldSet } from '../types/airtable';
import { getMinifiedRecords, minifyRecord } from '../utils/airtable';

const POSTS = 'posts';

export const getPosts = async (): Promise<TMinifyRecord<TPostsFieldSet>[]> =>
  getMinifiedRecords(
    await table<Partial<TPostsFieldSet>>(POSTS)
      .select({ sort: [{ field: 'date', direction: 'desc' }] })
      .all()
  );

export const getPostByRecordID = async (recordID: string): Promise<TMinifyRecord<TPostsFieldSet>> => minifyRecord(await table(POSTS).find(recordID));
