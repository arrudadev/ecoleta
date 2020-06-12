import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => response.json({ teste: 'teste' }));

export default routes;
