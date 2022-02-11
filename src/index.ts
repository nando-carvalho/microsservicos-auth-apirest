import express,  {Request, Response, NextFunction} from 'express'; //gerenciador de rotas - recebe e entrega coisas sobe o protocolo http
import usersRoute from './routes/users.route';
const app = express();

//Config da aplicação
app.use(express.json());
app.use(express.urlencoded({extended:true})); //serve para entender querystring entre outras coisas

//Routes
app.use(usersRoute);
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'bar'});
});

//Inicialização
app.listen(3000, () => {
    console.log('Api executando na porta 3000');
});