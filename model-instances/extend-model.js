import sequelize from "./seq.js";

import { Model, DataTypes } from '@sequelize/core'

class Vehicle extends Model {}

Vehicle.init({
    type: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    }
}, { sequelize })

sequelize.sync();