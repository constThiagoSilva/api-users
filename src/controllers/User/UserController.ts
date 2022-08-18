import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { Request, response, Response } from "express";
import { User } from "../../models/Users/Users";
import { UserRepository } from "../../repositories/User/UserRepository";
import { cryptPassword } from "../../services/cryptPassword";
import { userAlreadyExists } from "../../services/userAlreadyExists";
import { generateToken } from "../../services/generateToken";

class UserController {
  private repository;

  constructor() {
    this.repository = new UserRepository(new User());
  }
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    await userAlreadyExists({ email: email });

    const user = await this.repository.create({
      data: {
        name,
        email,
        password: await cryptPassword({ password, rounds: 10 }),
      },
    });

    return response
      .status(201)
      .json({
        user,
        token: await generateToken({
          data: user.email,
          secret: String(process.env.AUTH_SECRET),
          expires: "60s",
        }),
      });
  }
  async read(request: Request, response: Response): Promise<Response> {
    const users = await this.repository.read();

    return response.status(200).json(users);
  }
  async update(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const { name, email, password } = request.body;

    console.log(id, { name, email, password });

    const user = await this.repository.update({
      id,
      data: { name, email, password },
    });

    return response.status(200).json(user);
  }
  async delete(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    const user = await this.repository.delete({ id });

    return response.status(200).json(user);
  }

  async login(request: Request, response: Response): Promise<Response> {
    const {email, password} = request.body

    const userExists = await new UserRepository(new User()).findByEmail({email})

    if (!userExists) throw new Error('Email or password invalid!')

    if (!await bcrypt.compare(password, userExists.password)) throw new Error('Email or password invalid!')

    return response.json({user: userExists,token: await generateToken({data: userExists.email, secret: String(process.env.AUTH_SECRET), expires: 300})})
  }
}

export { UserController };
