import sequelize from "./seq.js";

import { Model, DataTypes } from '@sequelize/core';

class Laptop extends Model { }

Laptop.init({
    laptop_model: { 
        type: DataTypes.STRING
    }
}, { sequelize, modelName: 'laptop', 
tableName: 'lappy' // higher priority than modelName
});

sequelize.sync();

