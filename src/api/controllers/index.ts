import {Controller} from './controller';
import {CustomerController} from './customer';

export const controllers: Controller[] = [
    new CustomerController()
];
