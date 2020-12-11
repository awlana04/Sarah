import { Router } from 'express';

import AuthMiddleware from './middlewares/authMiddleware';

import UsersTableController from '@controllers/UsersTableController';
import AuthController from '@controllers/AuthController';

const route = Router();

route.post('/users', UsersTableController.create);
route.post('/auth', AuthController.authenticate);
route.get('/users', AuthMiddleware, UsersTableController.index);

export default route;
