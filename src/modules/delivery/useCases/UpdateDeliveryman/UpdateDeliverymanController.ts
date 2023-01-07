import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";


export class UpdateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { id: delivery_id } = request.params;
        const { deliveryman_id } = request;

        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

        const delivery = await updateDeliverymanUseCase.execute({ deliveryman_id, delivery_id })

        return response.json(delivery);
    }
}