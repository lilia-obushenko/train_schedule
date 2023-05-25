'use strict';

import { Train } from '../models/Train';
import { TrainType } from '../typedefs';

const getAll = async(from?: string, to?:string) => {
  let products;

  if (from && to) {
    products = await Train.findAll({
      where: { from, to },
      order: ['dispatch'],
    });
  } else {
    products = await Train.findAll({
      order: ['dispatch'],
    });
  }

  return products;
};

export const getByNumber = (trainNumber: number) => {
  return Train.findByPk(trainNumber);
};

const create = async(train: TrainType) => {
  const newTrain = {
    ...train,
  };

  return Train.create(newTrain);
};

const remove = async(trainNumber: number) => {
  return Train.destroy({
    where: { number: trainNumber },
  });
};

export const trainsService = {
  getAll,
  getByNumber,
  create,
  remove,
};