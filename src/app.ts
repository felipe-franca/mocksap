import express, { Application } from 'express'
import TicketRouter from './routes/TicketRouter';

class AppControlle {
  public app: Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  routes(): void {
    this.app.use('/ticket', () => TicketRouter.analyseTicket(this.app));
  }

}

export default new AppControlle().app;
