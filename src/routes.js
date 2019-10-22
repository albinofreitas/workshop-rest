import { Router } from 'express';

const routes = new Router();

import UserController from './app/controllers/UserController';
import WriterController from './app/controllers/WriterController';
import CommentController from './app/controllers/CommentController';
import PostController from './app/controllers/PostController';

routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

routes.get('/users/:userId/posts', WriterController.index);
routes.post('/users/:userId/posts', WriterController.store);
routes.delete('/users/:userId/posts/:id', WriterController.delete);
routes.get('/users/:userId/posts/:id', WriterController.show);

routes.get('/posts', PostController.index);

routes.post('/posts/:id/comments', CommentController.store);

export default routes;