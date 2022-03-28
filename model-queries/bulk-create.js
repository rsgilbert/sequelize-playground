import { Human } from "../human.js";
import sequelize from "../seq.js";
import { arrayJson } from "../util.js";


(async () => {
    // const d = await Human.create({ fname: 'Tita', age: 'bad-age', cash: 'tala'})
    const drivers = await Human.bulkCreate([
        { fname: 'Simon', age: 27, cash: -20300 },
        { fname: 'Tiger', age: 'Kemo', cash: 4 },
        { fname: 'Golola', age: 0, cash: -1 }
    ], { validate: true, fields: [ 'cash'] }); // validation is by default turned off for bulkCreate
    console.log(arrayJson(drivers));
})();


