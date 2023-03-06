"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TicketController_1 = __importDefault(require("../controllers/TicketController"));
class TicketRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    analyseTicket(app) {
        app
            .route('/tickets/analyse')
            .post(TicketController_1.default.store);
    }
}
exports.default = new TicketRouter();
