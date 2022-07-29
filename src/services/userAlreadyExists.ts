import { User } from "../models/Users/Users";
import { UserRepository } from "../repositories/User/UserRepository";

interface UserAlreadyExistsDTO {
  email: string;
}

export const userAlreadyExists = async ({ email }: UserAlreadyExistsDTO): Promise<void> => { 
    console.log(email)
  const userAlreadyExists = await new UserRepository(new User()).findByEmail({ email: email });


  if (userAlreadyExists) throw new Error('User already exisits!');
};
