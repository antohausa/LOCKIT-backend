import { Router } from 'express';
import * as con from '../controllers/usersController.js';

const router = Router()

router.get('/getUsers', con.getUsers);
router.post('/createUser', con.createUser);

export default router;
