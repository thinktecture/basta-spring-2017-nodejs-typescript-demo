import DataTypes = require('sequelize');
import {Instance, Model, Sequelize} from 'sequelize';

export interface BillPojo {
    id?: number;
    title?: string;
    value?: number;
}

export function billInitialize(sequelize: Sequelize) {
    return sequelize.define('Bill', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0
            }
        }
    });
}

export interface BillInstance extends Instance<BillPojo>, BillPojo {
}

export interface BillModel extends Model<BillInstance, BillPojo>, BillPojo {
}
