import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/client/useCases/CreateClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDelivery/CreateDeliverymanController";


const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/authenticate", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);

export { routes }