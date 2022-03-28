import sequelize from "../seq.js";
import { Human } from "../human.js";

(async () => {
    const humans = await Human.findAll();
    // console.log(humans);

    const h2names = await Human.findAll({
        attributes: ['id', 'fname']
    });
    // console.log(h2names);

    const h3cashes = await Human.findAll({
        attributes: ['id', 'cash']
    });
    // console.log(h3cashes.map(h => h.toJSON()));

    const h4renamedIds = await Human.findAll({
        attributes: [ ['fname', 'HumanName' ] , [ 'id', 'human_id'] ]
    })
    console.log(arrayJson(h4renamedIds))
})();

function arrayJson(marr){
    return marr.map(m => m.toJSON());
}