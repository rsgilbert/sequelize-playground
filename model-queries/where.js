// where

import sequelize from "../seq.js";
import { Human } from "../human.js";
import { arrayJson } from "../util.js";
import { Op } from "@sequelize/core";

(async () => {
    const h1 = await Human.findAll({
        where: {
            age: 12 
        }
    });
    // console.log(arrayJson(h1));

    // Using Op
    const h2 = await Human.findAll({
        where: {
            fname: {
                [Op.endsWith]: 'ck'
            },
            age: {
                [Op.not]: null
            }
        }
    });
    // console.log(arrayJson(h2))

    // or 
    const h3 = await Human.findAll({
        where: {
            [Op.or]: {
                id: {
                    [Op.eq]: 23
                },
                createdAt: {
                    [Op.gt]: '2022-03-27 04:20:00.000Z'
                }
            }
        }
    });
    // console.log(arrayJson(h3))

    // or on same field
    const h4 = await Human.findAll({
        where: {
            age: {
                [Op.or]: [
                    12, 
                    { [Op.gte]: 20 }
                ]
            }
        }
    });
    // console.log(arrayJson(h4))

    // use where to delete
    // const result = await Human.destroy({
    //     where: {
    //         cash: { [Op.eq]: null },
    //         age: { [Op.not]: null }
    //     }
    // }); // will delete human with id 25
    // console.log(result); // result is no of rows deleted.



})();