import { table } from '../lib/airtable';
import { TSettingsFieldSet } from '../types/airtable';
import { ABOUT_PAGE_ID, RESUME_PAGE_ID, POST_PAGE_ID } from '../constants/airtable';

const SETTINGS = 'settings';

export const isAboutPageActive = async (): Promise<boolean> => (await table<Partial<TSettingsFieldSet>>(SETTINGS).find(ABOUT_PAGE_ID)).fields.isActive || false;
export const isResumePageActive = async (): Promise<boolean> =>
  (await table<Partial<TSettingsFieldSet>>(SETTINGS).find(RESUME_PAGE_ID)).fields.isActive || false;
export const isPostsPageActive = async (): Promise<boolean> => (await table<Partial<TSettingsFieldSet>>(SETTINGS).find(POST_PAGE_ID)).fields.isActive || false;
