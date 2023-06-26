import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await loginService.verifyLogin({ email, password });
  if (response.status === 'OK') {
    return res.status(response.statusCode).json({ message: response.message });
  }
  return res.status(response.statusCode).json({ message: response.message });
};

export default {
  login,
};