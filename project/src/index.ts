import express, { application } from 'express';
import jwtAuthenticationMiddleware from './middlewares/jwt-authetication.middleware';
import errorHandler from './middlewares/error-handdler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRouter from './routes/users.route';
var emoji = require("node-emoji");


const app = express();

//configuração da aplicação

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração de Rotas
app.use(usersRouter);
app.use(authorizationRoute)

app.use(jwtAuthenticationMiddleware)
app.use(statusRoute);

//Config dos handlers de erro
app.use(errorHandler);

//emojis
const check = emoji.get("white_check_mark");
const twisted_rightwards_arrows = emoji.get("twisted_rightwards_arrows");
const sunglasses = emoji.get("sunglasses");
const large_green_circle = emoji.get("large_green_circle");
const door = emoji.get("door");
const zero = emoji.get("zero");
const three = emoji.get("three");
const fast_forward = emoji.get("fast_forward");
const rewind = emoji.get("rewind");


// Inicialização do servidor
app.listen(3000, () => {
    // const msg_aplicacao = '########-->   Aplicação Rodando   |-| Porta 3000|-|            <---############'

    const msg_aplicacao =`\n${large_green_circle}${large_green_circle}-- ${check}SERVIDOR ONLINE !${check}${large_green_circle}${large_green_circle} \n             ${sunglasses}
    ${fast_forward}--${door} Na porta 3000 ${door}--${rewind}\n`;

    console.log(msg_aplicacao)
})