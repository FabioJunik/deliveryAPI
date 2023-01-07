import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";


interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({ username, password }: ICreateClient) {
        const clientExists = await prisma.client.findFirst({
            where: {
                username: {
                    contains: username,
                    mode: "insensitive"
                }
            }
        });

        if (clientExists) {
            throw new Error("Client already exists")
        }

        const hashPassword = await hash(password, 10);

        const client = await prisma.client.create({
            data: {
                username,
                password: hashPassword
            }
        });

        return client;
    }
}