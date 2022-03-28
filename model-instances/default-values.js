import sequelize from "./seq.js";
import { DataTypes, Model } from '@sequelize/core'

class Bench extends Model {}

Bench.init({
    material: {
        type: DataTypes.STRING,
        defaultValue: 'Wood'
    }
}, { sequelize  })

Bench.sync();



