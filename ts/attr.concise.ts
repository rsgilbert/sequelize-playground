import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core'
import sequelize from '../seq.js';
// order of InferAttributes and InferCreationAttributes is important

class Person extends Model<InferAttributes<Person>, InferCreationAttributes<Person>> {
    // CreationOptional is a special type that marks the field as optional
    declare id?: number;
    declare firstname: string;
    declare lastname: string;
}

Person.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
}, { sequelize });


(async () => {
    await Person.sync();
    const p1 = await Person.create({ 
        firstname: 'JK', lastname: 'Rowling'
    });
    console.log(p1);
})();