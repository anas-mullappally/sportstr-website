import {
  integer,
  text,
  varchar,
  timestamp,
  pgTable,
} from "drizzle-orm/pg-core";

export const contactUs = pgTable("contact_us", {
  id: integer("id").primaryKey(),
  fullName: varchar("full_name", 255).notNull(),
  email: varchar("email", 255).notNull(),
  message: text("message").notNull(),
  datetime: timestamp("datetime").defaultNow(),
});

export const newsletterSubscription = pgTable("newsletter_subscription", {
  id: integer("id").primaryKey(),
  email: varchar("email", 255).notNull(),
  datetime: timestamp("datetime").defaultNow(),
});
