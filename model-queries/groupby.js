import sequelize from "../seq.js";
import { Human } from "../human.js";
import { arrayJson } from "../util.js";

(async () =>{
    const h1 = await Human.findAll({
        group: 'fname'
    })
    console.log(arrayJson(h1))
})();