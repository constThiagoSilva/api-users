import { Router } from "express";
import { Task } from "../models/Tasks/Tasks";
import { userRouter } from "./User/userRouter";

const router = Router()

router.use('/users', userRouter)

router.get('/', (request, response) => {
    return response.json({hello: 'world'})
})

router.post('/test/:user_id', async (request, response) => {
     const {user_id} = request.params
     const {title} = request.body

     console.log(user_id)

    const task = await Task.create({title, situation: false,user_id: Number(user_id)})

     return response.json(task)
 })

export {router}