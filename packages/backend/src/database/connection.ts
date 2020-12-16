import knex from 'knex';
import path from 'path';

const knexConfiguration = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: path.resolve(__dirname, 'database.sqlite'),
		},
		useNullAsDefault: true,
	},
	test: {
		client: 'sqlite3',
		connection: {
			filename: path.resolve(__dirname, 'test.sqlite'),
		},
		migrations: {
			directory: path.resolve(__dirname, 'migrations'),
		},
		seeds: {
			directory: path.resolve(__dirname, 'seeds'),
		},
		useNullAsDefault: true,
	},
};

const environment = process.env.NODE_ENV === 'test' ? 'test' : 'development';

const connection = knex(knexConfiguration[environment]);

export default connection;
