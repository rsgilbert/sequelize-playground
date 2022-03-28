import sequelize from "../seq.js";
import { DataTypes } from "@sequelize/core";


const Cup = sequelize.define('cup', {
    height: DataTypes.INTEGER,
    color: {
        type: DataTypes.STRING,
        set(v) {
            console.log('User wants to set value', v);
            if(!['yellow', 'green', 'blue', 'red'].includes(v)) {
                v = 'black';
            }
            this.setDataValue('color', v);
        }
    }
});

(async () => {
    await Cup.sync();
    const [c1] = await Cup.findOrCreate({ 
        where: {
            height: -7, 
            color: 'maroon'
        }
    });
    console.log('cup 1 is ', c1.toJSON());
})();