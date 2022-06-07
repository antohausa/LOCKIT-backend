import { Router } from 'express';
import {getUsers, createUsers} from './usersController.js';
const router = Router()

router.get('/get', getUsers);
router.get('/post', createUsers);

export default router;