import { Router } from 'express';
import {getUsers, createUsers} from './usersController.js';
const router = Router()

router.get('/getUsers', getUsers);
router.get('/createUsers', createUsers);

export default router;
