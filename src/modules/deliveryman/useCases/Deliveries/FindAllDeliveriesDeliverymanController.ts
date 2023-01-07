import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";



export class FindAllDeliveriesDeliverymanController {
    async handle(request: Request, response: Response) {

        const { deliveryman_id } = request;

        const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase();

        const delivereis = await findAllDeliveriesDeliverymanUseCase.execute(deliveryman_id);

        return response.json(delivereis);
    }
}