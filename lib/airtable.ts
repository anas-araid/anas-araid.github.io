import Airtable from 'airtable';

const airtable = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});

const base_id = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || '';

export const table = airtable.base(base_id);
