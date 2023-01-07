import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";


interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman) {

        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    contains: username,
                    mode: "insensitive"
                }
            }
        });

        if (!deliveryman) {
            throw new Error("Username or password invalid!");
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!");
        }

        const token = sign({ username }, "00060000035557093018800", {
            subject: deliveryman.id,
            expiresIn: "1d"
        });

        return token;
    }
}