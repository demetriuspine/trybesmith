import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/errorMiddleware';
import userRouter from './router/user';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use(errorMiddleware);

export default app;
