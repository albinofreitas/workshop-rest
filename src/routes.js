import { Router } from 'express';

const routes = new Router();

import UserController from './app/controllers/UserController';

routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

export default routes;