import sequelize from "./seq.js";
import { Model, DataTypes } from '@sequelize/core';

export class Human extends Model {}

Human.init({
    fname: {
        type: DataTypes.STRING,
        defaultValue: 'No name',
        validate: {
            isEmail: true
        }
    },
    age:  {
        type: DataTypes.INTEGER
    },
    cash: {
        type: DataTypes.INTEGER
    }
}, { sequelize, tableName: 'humans' });


// (async () => {
//     await sequelize.sync({ force: true });
// })();

