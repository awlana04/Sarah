import express from 'express';

import Registration from '../models/RegistrationModel';

const route = express.Router();

route.post('/register', async (request, response) => {
  try {
    const registration = Registration.create(request.body);

    return response.send({ registration });
  } catch(err) {
    return response.status(400).send({ error: "Registration failed" });
  };
});

module.exports = app => app.use();
