import express from 'express'
import sondaRouter from './routes.js';
const router = express.Router();

router.use('/sondas', sondaRouter)

export default router;