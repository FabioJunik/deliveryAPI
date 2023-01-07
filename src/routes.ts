import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAutheticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAutheticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/CreateClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/client/useCases/Deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/delivery/useCases/CreateDelivery/CreateDeliveryController";
import { FindAllAvalibleController } from "./modules/delivery/useCases/findAllAvalible/FindAllAvalibleController";
import { UpdateDeliverymanController } from "./modules/delivery/useCases/UpdateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/delivery/useCases/UpdateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDelivery/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/Deliveries/FindAllDeliveriesDeliverymanController";


const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();


const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const findAllAvalibleController = new FindAllAvalibleController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();


const createDeliveryController = new CreateDeliveryController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle);

routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);


routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);
routes.get("/delivery/avalible", ensureAuthenticateDeliveryman, findAllAvalibleController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);


export { routes }