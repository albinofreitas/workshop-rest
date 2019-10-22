import { Router } from 'express';

const routes = new Router();

import UserController from './app/controllers/UserController';
import PostController from './app/controllers/PostController';

routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

routes.post('/users/:userId/posts', PostController.store);
routes.delete('/users/:userId/posts/:id', PostController.delete);

export default routes;