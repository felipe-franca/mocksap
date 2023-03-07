import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Ticket from '../entities/Ticket';

class TicketController {
  public async store(req: Request, res: Response): Promise<Response> {
    const ticketData: Ticket = req.body;
    const ticket = new Ticket(ticketData);

    try {
      const result = await new PrismaClient().ticket.create({ data: ticket });

      return res.send({
        status: 'success',
        data: result
      });
    } catch (err) {
      return res.status(500).send({
        errorCode: 1,
        message: 'Error to persist ticket entity'
      });
    }
  }
}

export default new TicketController();
