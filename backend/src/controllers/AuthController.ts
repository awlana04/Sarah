import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '@models/UsersTable';

export default {
  async authenticate(request: Request, response: Response) {
    const repository = getRepository(User);
    const {
      email,
      password,
    } = request.body;

    const user = await repository.findOne({ where: { email }});

    if (!user) {
      return response.status(401).json({ message: "Invalid user" });
    };

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return response.status(401).json({ message: "Invalid user" });
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '30d' });

    return response.json({
      user,
      token,
    });
  }
};
