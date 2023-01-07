import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";



export class FindAllDeliveriesController {
    async handle(request: Request, response: Response) {

        const { client_id } = request;

        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

        const delivereis = await findAllDeliveriesUseCase.execute(client_id);

        return response.json(delivereis);
    }
}