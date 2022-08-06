import { Request, Response } from "express";
import { Task } from "../../models/Tasks/Tasks";
import { TaskRepository } from "../../repositories/Task/TaskRepository";

class TaskController {
  private repository;

  constructor() {
    this.repository = new TaskRepository(new Task());
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const { title } = request.body;

    const task = await this.repository.create({
      data: {
        title,
        situation: false,
        user_id: Number(user_id),
      },
    });

    return response.json(task);
  }
  async read(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const tasks = await this.repository.read({user_id: Number(user_id)})

    return response.json(tasks)
  }
  async update(request: Request, response: Response): Promise<Response> {
    const { id, user_id } = request.params;
    const { title } = request.body;

    const task = await this.repository.update({id: Number(id), user_id: Number(user_id), data: {title}})

    return response.json(task)

  }
  async delete(request: Request, response: Response): Promise<Response> {
    const { id, user_id } = request.params;

    const task = await this.repository.delete({id: Number(id), user_id: Number(user_id)})

    return response.json()
  }
}

export {TaskController}