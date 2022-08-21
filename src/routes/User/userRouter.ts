import { Router } from "express";
import { UserController } from "../../controllers/User/UserController";
import { userAlreadyExists } from "../../services/userAlreadyExists";

import bcrypt from 'bcrypt'
import { UserRepository } from "../../repositories/User/UserRepository";
import { User } from "../../models/Users/Users";
import { generateToken } from "../../services/generateToken";
import { authenticateToken } from "../../middlewares/authenticateToken";

const userRouter = Router()

userRouter.post('/auth/register', async (request, response) => {
    return await new UserController().create(request, response)
})
userRouter.post('/auth/login',async (request, response) => {
    return await new UserController().login(request, response)
})

userRouter.get('/auth/refresh', authenticateToken , async (request, response) => {
    return await new UserController().refresh(request, response)
})

userRouter.get('/', async (request, response) => {
    return await new UserController().read(request, response)
})
userRouter.post('/update/:id', async (request, response) => {
    return await new UserController().update(request, response)
})
userRouter.get('/delete/:id', async (request, response) => {
    return await new UserController().delete(request, response)
})



export {userRouter}