import express from 'express';

const routes = express.Router();

routes.use('/', (request, response) => response.json({ teste: 'teste' }));

export default routes;
