import { Router } from 'express';
import TicketController from '../controllers/TicketController';

const router = Router();

router.route('/analyse').post(TicketController.store);

export default router;

