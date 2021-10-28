import prismaClient from "../prisma";
import { CreateUserModel } from "../models/User";

class CreateUserService {
  async execute(userRequest: CreateUserModel) {
    const user = prismaClient.user.create({
      data: userRequest
    });

    return user;
  }
}

export { CreateUserService };
