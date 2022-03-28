import sequelize from "../../seq.js";
import { DataTypes } from "@sequelize/core";
import { arrayJson } from "../../util.js";

const Ship = sequelize.define('ship', {
    name: DataTypes.TEXT,
    crewCapacity: DataTypes.INTEGER,
    amountOfSails: DataTypes.INTEGER
}, { timestamps: false });

const Captain = sequelize.define('captain', {
    name: DataTypes.TEXT,
    skillLevel: { 
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 10 }
    }
}, { timestamps: false });

// Ship will have a property called captainId
Captain.hasOne(Ship);
Ship.belongsTo(Captain); 

Ship.belongsTo(Captain, { as: 'leftnant' }); // define alias


(async () => {
    await sequelize.sync({ alter: true });

    // create captain
    // const js = await Captain.create({ name: 'Jack Sparrow',  skillLevel: 10 });
    // console.log(js)

    // lazy loading
    // const js2 = await Captain.findOne({ where: { name: 'Jack Sparrow'}});
    // console.log(js2.toJSON())
    // const sh2 = await js2['getShip']();
    // console.log(sh2.toJSON());

    // eager loading
    // Runs sth like this: SELECT captain.id, captain.name, captain.skillLevel, ship.id, ship.name FROM captain LEFT OUTER JOIN ship ON captain.id = ship.captainId;
    const bestCaptains = await Captain.findAll({ 
        // where: { skillLevel: 10 },
        include: {
            model: Ship,

        } // when a captain has no ship, ship field will be set to null

    });
  
    console.log(arrayJson(bestCaptains));

    const sh1 = await bestCaptains[0].getShip();
    console.log('ship 1 is ', sh1.toJSON());
   // await sh1.update({ leftnantId: 2 });
   const leftnant1 = await sh1.getLeftnant();
    console.log('leftnant is', leftnant1.toJSON())

})();