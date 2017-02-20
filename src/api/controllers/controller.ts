import {HttpServer} from '../server/httpServer';

export interface Controller {
    init(server: HttpServer): void;
}
