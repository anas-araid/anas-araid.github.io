import { FieldSet } from 'airtable';

export type TPostsFieldSet = {
  slug: string;
  title: string;
  date: string;
  content: string;
} & FieldSet;

export type TSettingsFieldSet = {
  name: string;
  isActive: boolean;
} & FieldSet;

export type TMinifyRecord<T> = {
  id: string;
  fields: Partial<T>;
};
