import { prisma } from "../../../../database/prismaClient";


interface ICreateDelivery {
    client_id: string;
    item_name: string;
}

export class CreateDeliveryUseCase {
    async execute({ client_id, item_name }: ICreateDelivery) {
        const clientExists = await prisma.client.findFirst({
            where: {
                id: client_id
            }
        });

        if (!clientExists) {
            throw new Error("Client does not exists")
        }

        const delivery = await prisma.delivery.create({
            data: {
                item_name,
                client_id
            }
        })
        return delivery;
    }
}