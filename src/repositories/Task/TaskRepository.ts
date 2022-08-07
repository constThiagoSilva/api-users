import { ITask, ITaskRepository, CreateDTO, UpdateDTO, DeleteDTO, ReadDTO} from "../../interfaces/ITaskRepository";
import { Task } from "../../models/Tasks/Tasks";

interface UpdateSituationDTO {
  id: number;
  user_id: number;
  data: Pick<ITask, 'situation'>
  
}

class TaskRepository implements ITaskRepository {
  constructor(private database: any) {
    this.database = Task;
  }
  create({
    data: { title, situation, user_id },
  }: CreateDTO): Promise<ITask> {
    return this.database.create({title, situation, user_id})
  }
  update({ id, user_id ,data }: UpdateDTO): Promise<ITask> {
    return this.database.update({...data}, {where: {id, user_id}})
  }
  read({user_id}: ReadDTO): Promise<ITask[]> {
    return this.database.findAll({where: {user_id}})
  }
  delete({ id,user_id }: DeleteDTO): Promise<void> {
    return this.database.destroy({where: {id, user_id}})
  }
  updateSituation({id, user_id, data}: UpdateSituationDTO) {

    return this.database.update({...data}, {where: {id, user_id}})
  }
}


export {TaskRepository}