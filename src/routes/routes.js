import { Router } from 'express';
import Controller from '../controllers/sondaController.js';

const sondaRouter = Router()
const controller = new Controller();

sondaRouter.post('/', controller.registrarSonda)
sondaRouter.get('/', controller.getSondas)
sondaRouter.get('/getById', controller.getSondasById)
sondaRouter.get('/getMuestras', controller.getMuestras)

export default sondaRouter;
