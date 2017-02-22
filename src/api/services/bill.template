import {BillPojo} from '../models/bill';
import {databaseProvider} from '../database/index';
import {customerService} from './customer';

export class BillService {
    public async create(customerId, bill: BillPojo): Promise<BillPojo> {
        const db = await databaseProvider.get();
        const customer = await customerService.get(customerId);

        const dbBill = await db.Bill.create({
            title: bill.title,
            value: bill.value
        });

        await customer.addBill(dbBill);

        return dbBill;
    }

    public async remove(id): Promise<void> {
        const bill = await (await databaseProvider.get()).Bill.findByPrimary(id);
        await bill.destroy();
    }
}

export const billService = new BillService();
