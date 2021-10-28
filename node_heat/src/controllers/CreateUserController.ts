import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { CreateUserModel } from "../models/User";

const getUserFrom = (request: Request) => {
    const { name, password, login } = request.body;
    const user: CreateUserModel = {name, password, login}
    return user
}

class CreateUserController {
  async handle(request: Request, response: Response) {
    const service = new CreateUserService();

    const user = getUserFrom(request);
    const result = await service.execute(user);

    return response.json(result);
  }
}

export { CreateUserController };