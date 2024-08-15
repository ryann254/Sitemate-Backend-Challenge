import { Request, Response } from 'express';

export const createIssueController = async (req: Request, res: Response) => {
  if (!req.body) throw new Error('Request body is required');
  console.log(req.body);

  return res.status(201).json(req.body);
};

export const getIssueController = async (req: Request, res: Response) => {
  console.log('here');
  return res.status(200).json({
    id: '1',
    title: 'Add zod to improve robustness',
    description:
      'Add zod to this project to parse user data before trying to save it to the db.',
  });
};

export const updateIssueController = async (req: Request, res: Response) => {
  if (!req.body) throw new Error('Request body is required');
  if (!req.params.id) throw new Error('Id is required');

  console.log(req.body);

  return res.status(200).json(req.body);
};

export const deleteIssueController = async (req: Request, res: Response) => {
  if (!req.params.id) throw new Error('Id is required');
  console.log(req.params.id);

  return res.status(204).json({});
};
