import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";


export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { item_name, client_id } = request.body;

        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const delivery = await createDeliveryUseCase.execute({ item_name, client_id })

        return response.status(201).json(delivery);
    }
}