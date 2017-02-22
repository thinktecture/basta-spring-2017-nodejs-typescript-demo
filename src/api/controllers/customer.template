import {Controller} from './controller';
import {Request, Response} from 'restify';
import {HttpServer} from '../server/httpServer';
import {customerService} from '../services/customer';
import {CustomerPojo} from '../models/customer';

export class CustomerController implements Controller {
    public init(server: HttpServer): void {
        server.addRoute('get', 'api/customer/:id', this._get.bind(this));
        server.addRoute('post', 'api/customer', this._post.bind(this));
        server.addRoute('del', 'api/customer/:id', this._remove.bind(this));
    }

    private async _get(req: Request, res: Response): Promise<void> {
        const model = await customerService.get(req.params.id);
        model ? res.json(200, model) : res.send(404);
    }

    private async _post(req: Request, res: Response): Promise<void> {
        const model = await customerService.create(<CustomerPojo>{
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });

        res.json(200, model);
    }

    private async _remove(req: Request, res: Response): Promise<void> {
        await customerService.remove(req.params.id);
        res.send(200);
    }
}
