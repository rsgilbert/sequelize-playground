import sequelize from "../seq.js";
import { DataTypes, Model } from '@sequelize/core'


class Jacket extends Model { }

Jacket.init({
    // price: {
    //     type: DataTypes.DECIMAL
    // },
    description: {
        type: DataTypes.CHAR(30),
    }
}, { sequelize });


// sequelize.sync();
// sequelize.sync({ force: true }); // drops table if exists

// sequelize.sync({ alter : true }) // alter. table. Make necessary modifications to make it match model

// console.log('initial sync')
Jacket.sync({ alter: true })

Jacket.drop(); // drop table. async op
console.log('dropping table')

