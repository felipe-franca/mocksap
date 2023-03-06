import { Application, Router } from 'express';
import TicketController from '../controllers/TicketController';

class TicketRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  analyseTicket(app: Application): void {
    app
      .route('/tickets/analyse')
      .post(TicketController.store);
  }
}

export default new TicketRouter();
