import sequelize from "./seq";
import { DataTypes, Model } from '@sequelize/core'


class Man extends Model {
    // declare id: number;
}


// @ts-ignore
Man.init({
    id: DataTypes.INTEGER
}, { sequelize });

Man.