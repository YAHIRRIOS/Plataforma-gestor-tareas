import {connectMongoDb} from './connection.js';
//Repositorios
import { UserRepository } from './Repos/userRepository.js';
//Modelos
import User from './Models/userModel.js';

export const repositories = {
  userRepo: UserRepository
};

export const models = {
  userModel: User
}
export default {
  db: connectMongoDb,
  repositories,
  models
};
