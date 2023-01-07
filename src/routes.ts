import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/CreateClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDelivery/CreateDeliverymanController";


const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post("/client/", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

export { routes }