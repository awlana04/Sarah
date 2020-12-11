import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import UsersTable from '@models/UsersTable';

export default {
  index(request: Request, response: Response) {
    return response.send({ userId: request.userId });
  },

  async create(request: Request, response: Response) {
    const {
      register_name,
      registration,
      institution_where_it_operates,
      email,
      password,
    } = request.body;

    const usersRepository = getRepository(UsersTable);

    const userExists = await usersRepository.findOne({ where: { email } });

    if (userExists) {
      return response.status(409).json({ message: "User already exists!" });
    }

    const user = usersRepository.create({
      register_name,
      registration,
      institution_where_it_operates,
      email,
      password,
    });

    await usersRepository.save(user);
    
    return response.status(201).json(user);
  },
}