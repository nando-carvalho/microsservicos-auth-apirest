import {Request, Response, NextFunction, Router} from 'express'; //gerenciador de rotas - recebe e entrega coisas sobe o protocolo http
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Fernando' }];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{uuid:string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    // bancoDeDados.getUserByUUid(uuid);
    res.status(StatusCodes.OK).send({uuid});
});  

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {    
    const newUser = req.body;
    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
});

export default usersRoute;