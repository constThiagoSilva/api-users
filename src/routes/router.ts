import { Router } from "express";
import { taskRouter } from "./Task/taskRouter";
import { userRouter } from "./User/userRouter";

const router = Router()

router.use('/users', userRouter)
router.use('/tasks', taskRouter)

router.get('/', (request, response) => {
    return response.json({hello: 'world'})
})

export {router}