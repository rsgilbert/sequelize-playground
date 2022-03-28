import sequelize from "../seq.js";
import { Human } from "../human.js";
import { arrayJson } from "../util.js";

(async () =>{
    const h1 = await Human.findByPk(28);
    console.log(h1.toJSON())
})();