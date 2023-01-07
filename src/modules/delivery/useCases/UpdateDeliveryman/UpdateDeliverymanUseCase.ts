import { prisma } from "../../../../database/prismaClient";


interface IUpdateDeliveryman {
    delivery_id: string;
    deliveryman_id: string;
}

export class UpdateDeliverymanUseCase {
    async execute({ deliveryman_id, delivery_id }: IUpdateDeliveryman) {

        const deliveryExists = await prisma.delivery.findFirst({
            where: {
                id: delivery_id
            }
        });

        if (!deliveryExists) {
            throw new Error("Delivery does not exists")
        }

        const delivery = await prisma.delivery.update({
            where: {
                id: delivery_id
            },
            data: {
                deliveryman_id
            }
        })
        return delivery;
    }
}