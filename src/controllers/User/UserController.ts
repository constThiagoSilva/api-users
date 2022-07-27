import { Request, response, Response } from "express";
import { User } from "../../models/Users/Users";
import { UserRepository } from "../../repositories/User/UserRepository";

class UserController {
    async create(request: Request, response: Response): Promise<Response> {
        const {name, email, password} = request.body

        const user = await new UserRepository(new User()).create({data: {name, email, password}})

        return response.status(201).json(user)
    }
    async read(request: Request, response: Response): Promise<Response> {
        const users = await new UserRepository(new User()).read()

        console.log(users, 'allllllllllllllll')

        return response.status(200).json(users)
    }
    async update(request: Request, response: Response): Promise<Response> {
        const id = Number(request.params.id)
        const {name, email, password} = request.body

        console.log(id, {name, email, password})

        const user = await new UserRepository(new User()).update({id, data: {name, email, password}})

        console.log(user)

        return response.status(200).json(user)
    }
    async delete(request: Request, response: Response): Promise<Response> {
        const id = Number(request.params.id)

        const user = await new UserRepository(new User()).delete({id})

        return response.status(200).json(user)
    }
}

export {UserController}