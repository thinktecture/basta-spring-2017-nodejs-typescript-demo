import {RequestHandler} from 'restify';
import {HttpServer} from './httpServer';

export class Server implements HttpServer {
    public addRoute(method: string, url: string, callback: RequestHandler): void {

    }
}

