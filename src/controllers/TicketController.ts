import Ticket from '../entities/Ticket';
import { Request, Response } from 'express';

class TicketController {
  public store(req: Request, res: Response): Ticket {
    console.log('ticket');
    const ticketData = req.body;
    const ticket = new Ticket(ticketData);

    return ticket;
  }
}

export default new TicketController();
