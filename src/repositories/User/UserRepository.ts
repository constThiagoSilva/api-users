import {
  CreateDTO,
  DeleteDTO,
  IUserRepository,
  IUser,
  UpdateDTO,
} from "../../interfaces/IUserRepository";
import { User } from "../../models/Users/Users";

interface findByEmailDTO {
  email: string
}

class UserRepository implements IUserRepository {
  constructor(private database: any) {
    this.database = User;
  }

  async create({ data: { name, email, password } }: CreateDTO): Promise<IUser> {
    return this.database.create({ name, email, password });
  }
  async update({ id, data }: UpdateDTO): Promise<IUser> {
    return this.database.update({ ...data }, { where: { id: id }, returning: true });
  }
  async read(): Promise<IUser[]> {
    return this.database.findAll();
  }
  async delete({ id }: DeleteDTO): Promise<void> {
    return this.database.destroy({where: {id: id}})
  }
  async findByEmail({email}: findByEmailDTO): Promise<IUser> {
    return this.database.findOne({where: {email: email}})
  }
}

export { UserRepository };
