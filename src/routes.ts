import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAutheticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAutheticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/CreateClient/CreateClientController";
import { CreateDeliveryController } from "./modules/delivery/useCases/CreateDelivery/CreateDeliveryController";
import { FindAllAvalibleController } from "./modules/delivery/useCases/findAllAvalible/FindAllAvalibleController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDelivery/CreateDeliverymanController";


const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const findAllAvalibleController = new FindAllAvalibleController();

const createDeliveryController = new CreateDeliveryController();

routes.post("/client/", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);
routes.get("/delivery/avalible", ensureAuthenticateDeliveryman, findAllAvalibleController.handle);

export { routes }