import { prisma } from "../../../../database/prismaClient";


interface IUpdateEndDate {
    delivery_id: string;
    deliveryman_id: string;
}

export class UpdateEndDateUseCase {
    async execute({ deliveryman_id, delivery_id }: IUpdateEndDate) {

        const deliveryExists = await prisma.delivery.findFirst({
            where: {
                id: delivery_id
            }
        });

        if (!deliveryExists) {
            throw new Error("Delivery does not exists")
        }

        const delivery = await prisma.delivery.updateMany({
            where: {
                id: delivery_id,
                deliveryman_id
            },
            data: {
                end_at: new Date()
            }
        })
        return delivery;
    }
}