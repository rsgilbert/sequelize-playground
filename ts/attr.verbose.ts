import { DataTypes, Model, Optional } from '@sequelize/core'
import sequelize from '../seq.js'


// not recommended
// verbose
type UserAttributes = {
    id: number;
    name: string;
    age: number;
}

// Make id optional
type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> {
    declare id: number;
    declare name: string;
    declare age: number;
}

(async () => {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        age: DataTypes.INTEGER
    }, { sequelize });
    await User.sync();
    const u1 = await User.create({ name: 'Jonathan' });
    u1.age = 4;
})();

