import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticateToken";
import { taskRouter } from "./Task/taskRouter";
import { userRouter } from "./User/userRouter";

const router = Router()

router.use('/users', userRouter)
router.use('/tasks', authenticateToken ,taskRouter)

router.get('/', (request, response) => {
    return response.json({hello: 'world'})
})

export {router}