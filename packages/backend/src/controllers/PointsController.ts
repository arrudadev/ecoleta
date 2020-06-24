import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {
	async show(request: Request, response: Response) {
		const { id } = request.params;

		const point = await knex('points').where('id', id).first();

		if (!point) {
			return response.status(400).json({ message: 'Point not found.' });
		}

		const items = await knex('items')
			.join('point_items', 'items.id', '=', 'point_items.item_id')
			.where('point_items.point_id', id)
			.select('items.title');

		return response.json({ point, items });
	}

	async create(request: Request, response: Response) {
		try {
			const { name, email, whatsapp, latitude, longitude, city, uf, items } = request.body;

			const point = {
				image: 'image-fake',
				name,
				email,
				whatsapp,
				longitude,
				latitude,
				city,
				uf,
			};

			const insertedPointId = await knex.transaction(async (trx) => {
				const insertedIds = await trx('points').insert(point);

				const point_id = insertedIds[0];

				const pointItems = items.map((item_id: number) => ({
					point_id,
					item_id,
				}));

				await trx('point_items').insert(pointItems);

				return point_id;
			});

			return response.json({ id: insertedPointId, ...point });
		} catch (error) {
			return response.status(400).json({ error });
		}
	}
}

export default new PointsController();
