import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
    async execute(deliveryman_id: string) {
        const delivereis = await prisma.deliveryman.findMany({
            where: {
                id: deliveryman_id
            },
            select: {
                delivery: true,
                id: true,
                username: true
            }
        });

        return delivereis;
    }
}