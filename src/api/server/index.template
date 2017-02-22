import {Next, Request, RequestHandler, Response, Server as RestifyServer} from 'restify';
import restify = require('restify');
import restifyCors = require('restify-cors');
import {controllers} from '../controllers/index';
import {HttpServer} from './httpServer';

export class Server implements HttpServer {
    private _server: RestifyServer;

    public start(port: number): void {
        this._createRestifyServer();
        this._initializeControllers();

        this._server.listen(port, () => console.log(`Server up & running on port ${port}`));
    }

    private _createRestifyServer(): void {
        this._server = restify.createServer({
            name: 'Demo API Server'
        });

        const cors = restifyCors({
            origins: ['*']
        });

        this._server.pre(cors.preflight);
        this._server.use(cors.actual);
        this._server.use(restify.bodyParser());
    }

    public addRoute(method: string, url: string, callback: RequestHandler): void {
        if (!method) {
            throw new Error('Parameter method not set.');
        }

        if (!url) {
            throw new Error('Parameter url not set.');
        }

        if (!callback) {
            throw new Error('Parameter callback not set.');
        }

        method = method.toLowerCase();

        this._server[method](url, async (req: Request, res: Response, next: Next) => {
            try {
                await callback(req, res, next);
            }
            catch (e) {
                console.error(e);
                res.send(500, e);
            }
        });
        console.log(`Added api ${method.toUpperCase()} ${url}`);
    }

    private _initializeControllers(): void {
        controllers.forEach(controller => controller.init(this));
    }
}

export const server = new Server();
