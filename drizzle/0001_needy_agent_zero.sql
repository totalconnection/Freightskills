ALTER TABLE `resource_requests` ADD `country` text;--> statement-breakpoint
ALTER TABLE `resource_requests` ADD `consent_source` text DEFAULT 'optional-checkbox' NOT NULL;--> statement-breakpoint
ALTER TABLE `resource_requests` ADD `disclosure_version` text DEFAULT 'resource-request-v1' NOT NULL;