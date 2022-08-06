export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateDTO {
  data: Pick<IUser, "name" | "email" | "password">;
}
export interface UpdateDTO {
  id: number;
  data: Pick<IUser, 'name' | 'email' | 'password'>;
}
export interface DeleteDTO {
  id: number;
}

class IUserRepository {
  async create({ data: { name, email, password } }: CreateDTO): Promise<IUser> {
    throw new Error("method not implemented");
  }
  async update({ id, data }: UpdateDTO): Promise<IUser> {
    throw new Error("method not implemented");
  }
  async read(): Promise<IUser[]> {
    throw new Error("method not implemented");
  }
  async delete({ id }: DeleteDTO): Promise<void> {
    throw new Error("method not implemented");
  }
}

export { IUserRepository };
