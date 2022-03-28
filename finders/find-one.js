import sequelize from "../seq.js";
import { Human } from "../human.js";
import { arrayJson } from "../util.js";
import { Op } from "@sequelize/core";

(async () =>{
    const h1 = await Human.findOne({
        where: {
            fname: {
                [Op.eq]: 'Jack'
            }
        }
    });
    console.log(h1)
    // console.log(h1.toJSON())
})();