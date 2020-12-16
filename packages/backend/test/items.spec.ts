import supertest from 'supertest';

import { app } from '../src/app';
import connection from '../src/database/connection';

describe('Items', () => {
	beforeAll(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();

		await connection.seed.run();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to list collection items', async () => {
		const response = await supertest(app)
			.get('/items');

		expect(response.body[0]).toHaveProperty('id');
		expect(response.body[0]).toHaveProperty('title');
		expect(response.body[0]).toHaveProperty('image_url');
	});
});
