import { FieldSet } from 'airtable';

export type TPostsFieldSet = {
  slug: string;
  title: string;
  date: string;
  content: string;
} & FieldSet;

export enum EPAGE {
  ABOUT = 'about_page',
  POST = 'post_page',
  RESUME = 'resume_page',
}

export type TSettingsFieldSet = {
  name: EPAGE;
  isActive: boolean;
} & FieldSet;

export type TMinifyRecord<T> = {
  id: string;
  fields: Partial<T>;
};
