import { Router } from "express";
import { UserController } from "../../controllers/User/UserController";

const userRouter = Router()

userRouter.post('/add', async (request, response) => {
    return await new UserController().create(request, response)
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