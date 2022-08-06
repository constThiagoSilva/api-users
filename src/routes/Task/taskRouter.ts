import { Router } from "express";
import { TaskController } from "../../controllers/Task/TaskController";

const taskRouter = Router()

taskRouter.post('/create/:user_id', async (request, response) => {
    return await new TaskController().create(request, response)
})
taskRouter.post('/list/:user_id', async (request, response) => {
    return await new TaskController().read(request, response)
})
taskRouter.post('/update/:id/:user_id', async (request, response) => {
    return await new TaskController().update(request, response)
})
taskRouter.post('/delete/:id/:user_id', async (request, response) => {
    return await new TaskController().delete(request, response)
})

export {taskRouter}