"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TicketRouter_1 = __importDefault(require("./routes/TicketRouter"));
class AppControlle {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
    }
    routes() {
        this.app.use('/ticket', () => TicketRouter_1.default.analyseTicket(this.app));
    }
}
exports.default = new AppControlle().app;
