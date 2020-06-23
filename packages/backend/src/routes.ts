import express, { Request, Response } from 'express';

import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
	const items = await knex('items').select('*');

	const serializedItems = items.map((item) => ({
		id: item.id,
		title: item.title,
		image_url: `${process.env.SERVER_URL}/uploads/${item.image}`,
	}));

	return response.json(serializedItems);
});

routes.post('/points', async (request: Request, response: Response) => {
	try {
		const { name, email, whatsapp, latitude, longitude, city, uf, items } = request.body;

		await knex.transaction(async (trx) => {
			const insertedIds = await trx('points').insert({
				image: 'image-fake',
				name,
				email,
				whatsapp,
				longitude,
				latitude,
				city,
				uf,
			});

			const point_id = insertedIds[0];

			const pointItems = items.map((item_id: number) => ({
				point_id,
				item_id,
			}));

			await trx('point_items').insert(pointItems);
		});

		return response.json({ success: true });
	} catch (err) {
		return response.status(500).json({ error: err });
	}
});

export default routes;
