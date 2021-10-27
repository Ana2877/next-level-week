import prismaClient from "../prisma";
import { User } from "../models/User";

class CreateUserService {
  async execute(userRequest: User) {
    const user = prismaClient.user.create({
      data: userRequest
    });

    return user;
  }
}

export { CreateUserService };
