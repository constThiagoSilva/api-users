import { Router } from "express";
import { userRouter } from "./User/userRouter";

const router = Router()

router.use('/users', userRouter)

router.get('/', (request, response) => {
    return response.json({hello: 'world'})
})

export {router}