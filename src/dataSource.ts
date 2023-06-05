import "dotenv/config";

import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
	type: "postgres",
	url: `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB_NAME}`,
	entities: [__dirname + "/entities/**/*.entity.{js,ts}"],
	migrations: [__dirname + "/migration/*.ts"],
});
