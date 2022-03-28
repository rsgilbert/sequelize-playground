import sequelize from "./seq.js";
import { DataTypes } from '@sequelize/core';


const Person = sequelize.define('Person', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    }
})

sequelize.sync();
// console.log(Person === sequelize.models.Person)
// console.log(Person)
console.log(sequelize.models.Person)