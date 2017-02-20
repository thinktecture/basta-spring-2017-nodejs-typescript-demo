import {RequestHandler} from 'restify';

export interface HttpServer {
    addRoute(method: string, url: string, callback: RequestHandler): void;
}
