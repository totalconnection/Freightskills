import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
export const resourceRequests=sqliteTable('resource_requests',{
 id:text('id').primaryKey(),
 resource:text('resource').notNull(),
 firstName:text('first_name').notNull(),
 lastName:text('last_name').notNull(),
 email:text('email').notNull(),
 phone:text('phone'),
 marketingConsent:integer('marketing_consent',{mode:'boolean'}).notNull().default(false),
 country:text('country'),
 consentSource:text('consent_source').notNull().default('optional-checkbox'),
 disclosureVersion:text('disclosure_version').notNull().default('resource-request-v1'),
 createdAt:text('created_at').notNull(),
 activecampaignSyncedAt:text('activecampaign_synced_at'),
 activecampaignStartedAt:text('activecampaign_started_at'),
 activecampaignError:text('activecampaign_error'),
},table=>[index('resource_requests_email_idx').on(table.email)]);
