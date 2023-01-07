import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/client/useCases/CreateClient/CreateClientController";


const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/authenticate", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);

export { routes }