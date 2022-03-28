// perform an aggregation using sequelize.fn 
import sequelize from "../seq.js";
import { Human } from '../human.js'
import { arrayJson } from '../util.js'
(async () => {
    const humanCount = await Human.findAll({
        attributes: [
            'id', 'fname', 
            [sequelize.fn('COUNT', sequelize.col('age')), 'Number of Humans'],
            'age'
        ]
    })
    // console.log(arrayJson(humanCount));

    const hCount = await Human.findAll({
        attributes: {
            include: [
                [sequelize.fn('COUNT', sequelize.col('*')), 'num_humans']
            ]
        }
    });
    console.log(arrayJson(hCount));

    console.log('Number of humans', hCount[0].num_humans);
})();