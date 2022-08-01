import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers['authorization']

    if (!authHeader) return response.status(401).json({error: 'Token not provided'})

    const parts =  authHeader.split(' ')

    if (parts.length !== 2) return response.status(401).json({error: 'Token Mal-Formated'})

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) return response.status(401).json({error: 'Token Mal-Formated'})

    jwt.verify(token, String(process.env.AUTH_SECRET), (error, user) => {
        if (error) return response.status(401).json({error: 'Token Invalid'})

        request.user = user

        next()
    })
}