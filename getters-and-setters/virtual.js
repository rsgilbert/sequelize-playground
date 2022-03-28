import sequelize from "../seq.js";
import { DataTypes, Model } from '@sequelize/core'

const Fruit = sequelize.define('fruit', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    isEdible: {
        type: DataTypes.BOOLEAN
    },
    location: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.ENUM('green', 'red', 'white')
    },
    description: {
        type: DataTypes.VIRTUAL,
        get() {
            return `A ${this.color} fruit located in ${this.location}`;
        }
    }
});

(async () => {
    // await Fruit.sync();
    // const f1 = await Fruit.create({
    //     location: 'Kigali, Rwanda',
    //     color: 'green',
    //     isEdible: true
    // });
    // console.log(f1.toJSON())
    // console.log('description is ', f1.description);

    const f2 = await Fruit.findByPk('377a0f67-99a5-45ab-b5b1-1cef438bec73');
    console.log(f2.toJSON());
    await f2.update({ desciption: 'New description', color: 'white' });
    console.log('after update', f2.toJSON())

})();