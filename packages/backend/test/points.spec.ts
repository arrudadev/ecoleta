import path from 'path';
import supertest from 'supertest';

import { app } from '../src/app';
import connection from '../src/database/connection';

describe('Points', () => {
	beforeAll(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();

		await connection.seed.run();
	});

	beforeEach(async () => {
		await connection('point_items').truncate();
		await connection('points').truncate();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to create a Point', async () => {
		const responseFilterItems1_2_3_4 = await supertest(app)
			.post('/points')
			.field('name', 'Market test')
			.field('email', 'market.test@gmail.com')
			.field('whatsapp', '11912345678')
			.field('latitude', -23.6451121)
			.field('longitude', -46.7768827)
			.field('city', 'São Paulo')
			.field('uf', 'SP')
			.field('items', '1, 2, 3, 4')
			.attach('image', path.resolve(__dirname, '..', 'uploads', 'baterias.svg'));

		expect(responseFilterItems1_2_3_4.body).toHaveProperty('id');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('image');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('name');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('email');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('whatsapp');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('longitude');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('latitude');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('city');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('uf');
	});

	it('should not be able to create a Point when some mandatory field is missing', async () => {
		const responseFilterItems1_2_3_4 = await supertest(app)
			.post('/points')
			.field('whatsapp', '11912345678')
			.field('latitude', -23.6451121)
			.field('longitude', -46.7768827)
			.field('uf', 'SP')
			.field('items', '1, 2, 3, 4')
			.attach('image', path.resolve(__dirname, '..', 'uploads', 'baterias.svg'));

		expect(responseFilterItems1_2_3_4.status).toBe(400);
	});

	it('should insert the items in point_items table when create a point (using the item id and point id that been created)', async () => {
		const responseFilterItems1_2_3_4 = await supertest(app)
			.post('/points')
			.field('name', 'Market test')
			.field('email', 'market.test@gmail.com')
			.field('whatsapp', '11912345678')
			.field('latitude', -23.6451121)
			.field('longitude', -46.7768827)
			.field('city', 'São Paulo')
			.field('uf', 'SP')
			.field('items', '1, 2, 3, 4')
			.attach('image', path.resolve(__dirname, '..', 'uploads', 'baterias.svg'));

		expect(responseFilterItems1_2_3_4.body).toHaveProperty('id');

		const point_items = await connection('point_items').where('point_id', responseFilterItems1_2_3_4.body.id).select('*');

		expect(point_items[0].point_id).toBe(responseFilterItems1_2_3_4.body.id);
		expect(point_items[1].point_id).toBe(responseFilterItems1_2_3_4.body.id);
		expect(point_items[2].point_id).toBe(responseFilterItems1_2_3_4.body.id);
		expect(point_items[3].point_id).toBe(responseFilterItems1_2_3_4.body.id);

		expect(point_items[0].item_id).toBe(1);
		expect(point_items[1].item_id).toBe(2);
		expect(point_items[2].item_id).toBe(3);
		expect(point_items[3].item_id).toBe(4);
	});

	it('should be able to list a specific point', async () => {
		const responseFilterItems1_2_3_4CreatePoint = await supertest(app)
			.post('/points')
			.field('name', 'Market test')
			.field('email', 'market.test@gmail.com')
			.field('whatsapp', '11912345678')
			.field('latitude', -23.6451121)
			.field('longitude', -46.7768827)
			.field('city', 'São Paulo')
			.field('uf', 'SP')
			.field('items', '1, 2, 3, 4')
			.attach('image', path.resolve(__dirname, '..', 'uploads', 'baterias.svg'));

		expect(responseFilterItems1_2_3_4CreatePoint.body).toHaveProperty('id');

		const responseFilterItems1_2_3_4 = await supertest(app)
			.get(`/points/${responseFilterItems1_2_3_4CreatePoint.body.id}`);

		expect(responseFilterItems1_2_3_4.body).toHaveProperty('point');
		expect(responseFilterItems1_2_3_4.body).toHaveProperty('items');

		expect(responseFilterItems1_2_3_4.body.point.id).toEqual(responseFilterItems1_2_3_4CreatePoint.body.id);
		expect(responseFilterItems1_2_3_4.body.point).toHaveProperty('name');
		expect(responseFilterItems1_2_3_4.body.point).toHaveProperty('email');
		expect(responseFilterItems1_2_3_4.body.point).toHaveProperty('whatsapp');
		expect(responseFilterItems1_2_3_4.body.point).toHaveProperty('latitude');
		expect(responseFilterItems1_2_3_4.body.point).toHaveProperty('longitude');
		expect(responseFilterItems1_2_3_4.body.point).toHaveProperty('city');
		expect(responseFilterItems1_2_3_4.body.point).toHaveProperty('uf');

		expect(responseFilterItems1_2_3_4.body.items).toHaveLength(4);
		expect(responseFilterItems1_2_3_4.body.items[0]).toHaveProperty('title');
	});

	it('should return status responseFilterItems1_2_3_4 400 when point was not found', async () => {
		const responseFilterItems1_2_3_4 = await supertest(app)
			.get('/points/12345');

		expect(responseFilterItems1_2_3_4.status).toBe(400);
	});

	it('should be able to list all points filtered by city, uf and collection items', async () => {
		await supertest(app)
			.post('/points')
			.field('name', 'Market test')
			.field('email', 'market.test@gmail.com')
			.field('whatsapp', '11912345678')
			.field('latitude', -23.6451121)
			.field('longitude', -46.7768827)
			.field('city', 'São Paulo')
			.field('uf', 'SP')
			.field('items', '1, 2')
			.attach('image', path.resolve(__dirname, '..', 'uploads', 'baterias.svg'));

		await supertest(app)
			.post('/points')
			.field('name', 'Market test')
			.field('email', 'market.test@gmail.com')
			.field('whatsapp', '11912345678')
			.field('latitude', -23.6451121)
			.field('longitude', -46.7768827)
			.field('city', 'São Paulo')
			.field('uf', 'SP')
			.field('items', '3, 4')
			.attach('image', path.resolve(__dirname, '..', 'uploads', 'baterias.svg'));

		const responseFilterItems1_2_3_4 = await supertest(app)
			.get('/points')
			.query({ city: 'São Paulo', uf: 'SP', items: '1, 2, 3, 4' });

		expect(responseFilterItems1_2_3_4.body).toHaveLength(2);
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('image_url');
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('id');
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('name');
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('email');
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('whatsapp');
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('latitude');
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('longitude');
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('city');
		expect(responseFilterItems1_2_3_4.body[0]).toHaveProperty('uf');

		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('image_url');
		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('id');
		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('name');
		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('email');
		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('whatsapp');
		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('latitude');
		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('longitude');
		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('city');
		expect(responseFilterItems1_2_3_4.body[1]).toHaveProperty('uf');

		const responseFilterItems1_2 = await supertest(app)
			.get('/points')
			.query({ city: 'São Paulo', uf: 'SP', items: '1, 2' });

		expect(responseFilterItems1_2.body).toHaveLength(1);
		expect(responseFilterItems1_2.body[0]).toHaveProperty('image_url');
		expect(responseFilterItems1_2.body[0]).toHaveProperty('id');
		expect(responseFilterItems1_2.body[0]).toHaveProperty('name');
		expect(responseFilterItems1_2.body[0]).toHaveProperty('email');
		expect(responseFilterItems1_2.body[0]).toHaveProperty('whatsapp');
		expect(responseFilterItems1_2.body[0]).toHaveProperty('latitude');
		expect(responseFilterItems1_2.body[0]).toHaveProperty('longitude');
		expect(responseFilterItems1_2.body[0]).toHaveProperty('city');
		expect(responseFilterItems1_2.body[0]).toHaveProperty('uf');
	});
});
