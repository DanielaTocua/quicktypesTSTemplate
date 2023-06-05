import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";

import { appDataSource } from "./dataSource";
import animalRoutes from "./routes/animal.routes";
import personRoutes from "./routes/person.routes";
export class App {
	private readonly _app: Application;

	constructor() {
		this._app = express();
		this.initMiddlewares();
		this.initDatabase();
	}

	private initDatabase() {
		appDataSource.initialize();
	}

	private initMiddlewares() {
		this._app.use(cors());
		this._app.use(helmet());
		this._app.use(express.json());
		this._app.use(express.urlencoded({ extended: true }));
		this._app.use("/animal", animalRoutes);
		this._app.use("/person", personRoutes);
	}

	public get app(): Application {
		return this._app;
	}
}
