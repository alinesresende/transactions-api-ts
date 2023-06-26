import UserModel from '../database/models/user.model';
import { LoginPayload } from '../types/LoginPayload';
import { ServiceResponseError, ServiceResponseSucess } from '../types/ServiceResponse';

const verifyLogin = async ({ email, password }: LoginPayload): 
Promise<ServiceResponseError | ServiceResponseSucess> => {
  if (!email || !password) {
    return { status: 'INVALID_DATA', message: 'Invalid data!', statusCode: 400 };
  }

  const user = await UserModel.findOne({ where: { email } });
  if (!user) {
    return { status: 'NOT_FOUND', message: 'User not found!', statusCode: 404 };
  }

  if (password !== user.dataValues.password) {
    return { status: 'UNAUTHORIZED', message: 'Email and password not found!', statusCode: 401 };
  }

  return { status: 'OK', message: user, statusCode: 200 };
};

export default {
  verifyLogin,
};