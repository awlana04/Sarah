import express from 'express';

import './controllers/RegistrationController';

const app = express();

app.use(express.json());

app.listen(3333);
