"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ticket {
    constructor({ subject, startDate, endDate, openedAt, closedAt, description, officeBillingDocument, protocol, status, ventureCode }) {
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
exports.default = Ticket;
