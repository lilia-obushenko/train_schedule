'use strict';

import  { trainsService } from '../services/Trains';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  try {
    const { from, to } = req.query;

    const trains = await trainsService.getAll(from as string, to as string);

    res.send(trains);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const getByNumber = async(req: Request, res: Response) => {
  const { number } = req.params;

  console.log(number);

  try {
    const foundTrain = await trainsService.getByNumber(Number(number));

    if (!foundTrain) {
      res.sendStatus(404);

      return;
    }

    res.send(foundTrain);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const create = async(req: Request, res: Response) => {
  const body = req.body;

  try {
    const newTrain = await trainsService.create(body);

    res.statusCode = 201;
    res.send(newTrain);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const remove = async(req: Request, res: Response) => {
  const { number } = req.params;
  const foundTrain = await trainsService.getByNumber(Number(number));

  if (!foundTrain) {
    res.sendStatus(404);

    return;
  }

  await trainsService.remove(Number(number));
  res.sendStatus(204);
};