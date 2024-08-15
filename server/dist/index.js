"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
// Setup PORT
var PORT = 5000 || process.env.PORT;
// Connect to mongodb
// Handle unexpected errors: => Log the errors and exit the process
// Run server
app_1.default.listen(PORT, function () { return console.log("Server running on PORT ".concat(PORT)); });
