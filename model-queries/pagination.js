import sequelize from "../seq.js";
import { Human } from "../human.js";
import { arrayJson } from "../util.js";

(async () =>{
    const h1 = await Human.findAll({
        order: [
            [ 'cash' ]
        ],
        limit: 4,
        offset: 2,
    })
    console.log(arrayJson(h1))
})();