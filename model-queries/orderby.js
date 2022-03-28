import sequelize from "../seq.js";
import { Human } from "../human.js";
import { arrayJson } from "../util.js";

(async () => {
    // const h1 = await Human.findAll({
    //     order: [
    //        // ['cash', 'ASC']
    //        // sequelize.fn('min', sequelize.col('age'))
    //        sequelize.random()
    //     ]
    // });
   // console.log(arrayJson(h1))

    // const h2 = await Human.findOne({
    //     order: [
    //         ['fname', 'ASC']
    //     ]
    // })
    // console.log(h2.toJSON())

    const h3 = await Human.findAndCountAll({
        order: [
            ['fname', 'ASC'],
            ['age', 'DESC']
        ]
    });
    console.log('count', h3.count);
    console.log(arrayJson(h3.rows));
})();