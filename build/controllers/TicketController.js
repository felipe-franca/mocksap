"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(require("../entities/Ticket"));
class TicketController {
    store(req, res) {
        console.log('ticket');
        const ticketData = req.body;
        const ticket = new Ticket_1.default(ticketData);
        return ticket;
    }
}
exports.default = new TicketController();
