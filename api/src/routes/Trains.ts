import { Router } from 'express';

import { getAll, getByNumber, create, remove } from '../controllers/Trains';

const trainsRouter = Router();

trainsRouter.get('/', getAll);
trainsRouter.get('/:number', getByNumber);
trainsRouter.post('/', create);
trainsRouter.delete('/:number', remove);

export default trainsRouter;