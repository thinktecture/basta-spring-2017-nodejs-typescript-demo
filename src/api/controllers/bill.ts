import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import {billService} from '../services/bill';
import {BillPojo} from '../models/bill';

export class BillController implements Controller {
    public init(server: HttpServer): void {
        server.addRoute('post', 'api/bill', this._post.bind(this));
        server.addRoute('del', 'api/bill/:id', this._remove.bind(this));
    }

    private async _post(req: Request, res: Response): Promise<void> {
        const model = await billService.create(req.body.customerId, <BillPojo>{
            title: req.body.title,
            value: req.body.value
        });

        return res.json(200, model);
    }

    private async _remove(req: Request, res: Response): Promise<void> {
        await billService.remove(req.params.id);
        res.send(200);
    }
}
