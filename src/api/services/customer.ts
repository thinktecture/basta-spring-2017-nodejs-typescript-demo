import {CustomerInstance, CustomerPojo} from '../models/customer';
import {databaseProvider} from '../database/index';

export class CustomerService {
    public async get(id: number): Promise<CustomerInstance> {
        return (await databaseProvider.get())
            .Customer.findByPrimary(id);
    }

    public async create(customer: CustomerPojo): Promise<CustomerInstance> {
        return (await databaseProvider.get())
            .Customer.create({
                firstName: customer.firstName,
                lastName: customer.lastName
            });
    }

    public async remove(id: number): Promise<void> {
        const model = await this.get(id);
        await model.destroy();
    }
}

export const customerService = new CustomerService();
