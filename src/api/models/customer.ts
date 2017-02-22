import DataTypes = require('sequelize');
import {Instance, Model, Sequelize} from 'sequelize';
import {Models} from './index';
import {BillInstance} from './bill';

export interface CustomerPojo {
    id?: number;
    firstName?: string;
    lastName?: string;
}

export function customerInitialize(sequelize: Sequelize) {
    const Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models: Models) => Customer.hasMany(models.Bill)
        }
    });

    return Customer;
}

export interface CustomerInstance extends Instance<CustomerPojo>, CustomerPojo {
    addBill(bill: BillInstance): Promise<any>;
}

export interface CustomerModel extends Model<CustomerInstance, CustomerPojo>, CustomerPojo {
}

