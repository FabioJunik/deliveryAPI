import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
    async execute(client_id: string) {
        const delivereis = await prisma.client.findMany({
            where: {
                id: client_id
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