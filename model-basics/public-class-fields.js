import sequelize from "./seq.js";
import { DataTypes, Model } from '@sequelize/core';


class Basket extends Model {
    id; // bad idea
    basketName; // public property. wont be in table
}

Basket.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: false
    },
    size: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    }
}, { sequelize })

sequelize.sync();

const b1 = new Basket({ id: 52, size: 11})
console.log(b1, b1.size);

