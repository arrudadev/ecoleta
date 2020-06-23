import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {
	async create(request: Request, response: Response) {
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
		} catch (error) {
			return response.status(400).json({ error });
		}
	}
}

export default new PointsController();
