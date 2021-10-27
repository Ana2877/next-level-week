import { Router } from "express";
import { AuthenticateUserWithGithubController } from "./controllers/AuthenticateUserWithGithubController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAuthenticated } from "./middleware/EnsureAuthenticated";

const router = Router();

//express pass automatically the params request and response to the handle
router.post("/authenticate", new AuthenticateUserWithGithubController().handle);

router.post(
  "/message",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

router.post("/user", new CreateUserController().handle);

export { router };
