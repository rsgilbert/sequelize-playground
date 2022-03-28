import sequelize from "../seq.js";
import { DataTypes, Model } from '@sequelize/core'


const Ship = sequelize.define('ship', {
    model: {
        type: DataTypes.STRING,
        get() {
            const rawValue = this.getDataValue('model')
            return rawValue ? 'MODEL-' + rawValue.toUpperCase() : 'UNKNOWN';
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        get() {
            const rawValue = this.getDataValue('quantity');
            return (rawValue < 5) ? 0 : rawValue; 
        }
    }
});

(async () => {
    await Ship.sync();

    // const [sh1, _created] = await Ship.findOrCreate({ 
    //     where: { 
    //             model: 'tele-TUBBIES',
    //             quantity: 3
    //         }});
    // console.log(sh1.toJSON());

    const sh2 = await Ship.findByPk(2);
    console.log(sh2.toJSON());

    
})();
