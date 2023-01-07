import { prisma } from "../../../../database/prismaClient";

export class FindAllAvalibleUseCase {
    async execute() {
        const delivereis = await prisma.delivery.findMany({
            where: {
                end_at: null,
                deliveryman_id: null,
            }
        });

        return delivereis;
    }
}