CREATE TABLE `resource_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`resource` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`marketing_consent` integer DEFAULT false NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `resource_requests_email_idx` ON `resource_requests` (`email`);