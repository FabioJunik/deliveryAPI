import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string;
}

export async function ensureAuthenticateClient(
    requesnt: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = requesnt.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing"
        })
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "000600000355570930188") as IPayload;

        requesnt.client_id = sub;

        return next();

    } catch (err) {
        return response.status(401).json({
            message: "Invalid token"
        });
    }
}