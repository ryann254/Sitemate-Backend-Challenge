"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
// Set security HTTP headers
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
app.use('/api/v1', routes_1.default);
exports.default = app;
