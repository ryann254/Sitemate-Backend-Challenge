import { Router } from 'express';
import {
  getIssueController,
  createIssueController,
  updateIssueController,
  deleteIssueController,
} from '../controllers/issue.controller';

const router = Router();

router.route('/').get(getIssueController).post(createIssueController);
router.route('/:id').patch(updateIssueController).delete(deleteIssueController);

export default router;
