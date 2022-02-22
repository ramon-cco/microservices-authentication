import express, { application } from 'express';
import errorHandler from './middlewares/error-handdler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRouter from './routes/users.route';


const app = express();

//configuração da aplicação

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração de Rotas
app.use(usersRouter);
app.use(statusRoute);
app.use(authorizationRoute)

//Config dos handlers de erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
    console.log(`########-->   Aplicação Rodando   |-| Porta 3000|-|            <---############`)
})