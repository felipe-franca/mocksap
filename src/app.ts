import express, { Application,  Router } from 'express'
import TicketRouter from './routes/TicketRouter';

class AppControlle {
  public app: Application;

  constructor() {
    this.app = express();
    this.config(this.app);
    this.routes(this.app);
  }

  config(app: Application): void {
    app.use(express.json());
  }

  routes(app: Application): void {
    app.use('/ticket', TicketRouter);
  }

}

export default new AppControlle().app;
