import sequelize from "../seq.js";
import { DataTypes } from '@sequelize/core'

export const User = sequelize.define('app_users', {
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    hashedPassword: {
        type: DataTypes.STRING(64),
        validate: {
            is: /^[0-9a-f]{4}$/i, // must be exactly 4 characters
            isGoodName(value) {
                if(!value.includes('good')) {
                    throw Error('bad name.')
                }
            }
        }
    }
}, {
    // model-wide validations
    validate: {
        usernameMustMatchHashedPassword() {
            if(this.username[0] != this.hashedPassword[0]) {
               throw Error('username first char not matching hashed password')
            }
        }
    }
});

// (async () => {
//     await User.sync({ force: true });
//     const u1 = await User.findAll();
//     console.log('users', u1);
// })();