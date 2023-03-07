interface ITicket {
  protocol: string,
  openedAt: Date,
  closedAt: Date,
  startDate: Date,
  endDate: Date,
  description: string,
  subject: string,
  officeBillingDocument: string,
  status: string,
  ventureCode: number
}

class Ticket implements ITicket {
  subject: string;
  startDate: Date;
  endDate: Date;
  openedAt: Date
  closedAt: Date;
  description: string;
  officeBillingDocument: string;
  protocol: string;
  status: string;
  ventureCode: number;

  constructor({
    subject,
    startDate,
    endDate,
    openedAt,
    closedAt,
    description,
    officeBillingDocument,
    protocol,
    status,
    ventureCode }: ITicket) {
      this.closedAt = closedAt;
      this.openedAt = openedAt;
      this.endDate = endDate;
      this.startDate = startDate;
      this.description = description;
      this.officeBillingDocument = officeBillingDocument;
      this.protocol = protocol;
      this.status = status;
      this.subject = subject;
      this.ventureCode = ventureCode;
  }
}

export default Ticket;
