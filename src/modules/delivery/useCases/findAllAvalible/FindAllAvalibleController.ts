import { Request, Response } from "express";
import { FindAllAvalibleUseCase } from "./FindAllAvalibleUseCase";



export class FindAllAvalibleController {
    async handle(request: Request, response: Response) {
        const findAllAvalibleUseCase = new FindAllAvalibleUseCase();

        const delivereis = await findAllAvalibleUseCase.execute();

        return response.json(delivereis);
    }
}