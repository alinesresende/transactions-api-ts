import jwt from 'jsonwebtoken';
import { LoginPayload } from '../types/LoginPayload';

const secret = process.env.JWT_SECRET || 'secret';

function sign(payload: LoginPayload): string {
  // 1 - jwt.sign recebe o payload e secrect como parametros
  // 2 - retorna uma string
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): LoginPayload { 
  /* Ao utilizarmos Type Assertion para `TokenPayload` aqui, estamos garantindo que 
  a função `jwt.verify` sempre retornará o `id` e o `email`. Nesse caso, irá, mas
  vale lembrar que, se não retornar, perdemos a proteção da tipagem aqui. Usamos
  a ferramenta com responsabilidade! */
  const data = jwt.verify(token, secret) as LoginPayload; 
  return data; 
}

export default {
  sign,
  verify,
};