"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var issue_routes_1 = __importDefault(require("./issue.routes"));
var router = (0, express_1.Router)();
var defaultIRoute = [
    {
        path: '/issue',
        route: issue_routes_1.default,
    },
];
defaultIRoute.forEach(function (route) {
    router.use(route.path, route.route);
});
exports.default = router;
