"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var issue_controller_1 = require("../controllers/issue.controller");
var router = (0, express_1.Router)();
router.route('/').get(issue_controller_1.getIssueController).post(issue_controller_1.createIssueController);
router.route('/:id').patch(issue_controller_1.updateIssueController).delete(issue_controller_1.deleteIssueController);
exports.default = router;
