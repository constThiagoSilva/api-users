export interface ITask {
  id: number;
  user_id: number;
  title: string;
  situation: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDTO {
  data: Pick<ITask, "title" | "situation" | "user_id">;
}

export interface UpdateDTO {
  id: number;
  user_id: number;
  data: Pick<ITask, "title">;
}
export interface ReadDTO {
  user_id: number
}
export interface DeleteDTO {
  id: number;
  user_id: number;
}


class ITaskRepository {
    async create({ data: { title, situation, user_id } }: CreateDTO): Promise<ITask> {
      throw new Error("method not implemented");
    }
    async update({ id, data }: UpdateDTO): Promise<ITask> {
      throw new Error("method not implemented");
    }
    async read({user_id}: ReadDTO): Promise<ITask[]> {
      throw new Error("method not implemented");
    }
    async delete({ id,user_id }: DeleteDTO): Promise<void> {
      throw new Error("method not implemented");
    }
  }
  
  export { ITaskRepository };