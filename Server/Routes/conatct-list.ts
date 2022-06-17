import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayContactList } from '../Controllers/conatct-list';

router.get('/contact-list', DisplayContactList);

export default router;
