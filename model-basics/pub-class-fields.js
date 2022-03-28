import sequelize from "./sequelize";
import { DataTypes, Model } from '@sequelize/core';
class Man extends Model {
}
// @ts-ignore
Man.init({
    id: DataTypes.INTEGER
}, { sequelize });
