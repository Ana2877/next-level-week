import { Request, Response } from "express";
import { AuthenticateUserWithAccountService } from "../services/AuthenticateUserWithAccountService";
import { AuthenticateUserWithAccountModel } from "../models/User";

const getUserFrom = (request: Request) => {
    const { password, login } = request.body;
    const user: AuthenticateUserWithAccountModel = {login, password}
    return user
}

class AuthenticateUserWithAccountController {
  async handle(request: Request, response: Response) {
    const service = new AuthenticateUserWithAccountService();

    const user = getUserFrom(request);
    const result = await service.execute(user);

    if (result)
      return response.json(result);
    else
    return response.status(400).json({status: 400, message: "Login or password invalid"})
  }
}

export { AuthenticateUserWithAccountController };