import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';
import jwt from '../utils/jwt';

/* Função para extrair o token */
function extractToken(authorization: string) {
  return authorization.split(' ')[1];
}

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token is required' });
  }

  const token = extractToken(authorization);

  try {
    const decoded = await jwt.verify(token);
    const user = await UserModel.findOne({ where: { email: decoded.email } });
    if (!user) return res.status(401).json({ message: 'Invalid token' }); 
    
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default authMiddleware;