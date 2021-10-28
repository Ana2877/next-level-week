import prismaClient from "../prisma";
import { AuthenticateUserWithAccountModel, DatabaseUser } from "../models/User";

class AuthenticateUserWithAccountService {
  async execute(userRequest: AuthenticateUserWithAccountModel) {
    if (await this.isValid(userRequest)) return userRequest;
    else return null;
  }

  async isValid(userRequest: AuthenticateUserWithAccountModel) {
    const user: DatabaseUser = await prismaClient.user.findFirst({
      where: {
        login: userRequest.login,
      },
    });

    return this.areEqual(user, userRequest);
  }

  private areEqual(
    user: DatabaseUser,
    userRequest: AuthenticateUserWithAccountModel
  ) {
    return (
      user?.login === userRequest.login && user?.password === userRequest.password
    );
  }
}

export { AuthenticateUserWithAccountService };
