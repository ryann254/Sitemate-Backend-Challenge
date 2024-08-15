import { Router } from 'express';
import IssueRoute from './issue.routes';

interface IRoute {
  path: string;
  route: Router;
}

const router = Router();

const defaultIRoute: IRoute[] = [
  {
    path: '/issue',
    route: IssueRoute,
  },
];

defaultIRoute.forEach((route: IRoute) => {
  router.use(route.path, route.route);
});

export default router;
