import express, { Request, Response } from 'express';
import loginController from './controllers/login.controller';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.post('/login', loginController.login);

export default app;
