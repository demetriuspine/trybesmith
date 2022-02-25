import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/errorMiddleware';
import userRouter from './router/user';
import loginRouter from './router/login';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use(errorMiddleware); // sempre vir depois das rotas

export default app;
