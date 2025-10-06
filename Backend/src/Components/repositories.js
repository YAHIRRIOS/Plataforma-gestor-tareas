
import { repositories as repoClases, models } from '../DB/index.js';

export const userRepository = new repoClases.userRepo(models.userModel); // 



    