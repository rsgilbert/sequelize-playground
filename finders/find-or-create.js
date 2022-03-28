import sequelize from "../seq.js";
import { Human } from "../human.js";
import { arrayJson } from "../util.js";

(async () =>{
    const res = await Human.findOrCreate({
        where: {
            fname: 'petero@taka.com', age: 3, cash: 2000
        }
    });
    console.log('was created: ', res[1]);
    console.log('human: ', res[0]);
})();