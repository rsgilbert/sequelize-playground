import sequelize from "../seq.js";
import { Human } from "../human.js";

(async () => {
    const jack = await Human.create({ fname: 'Jack', age: 20, cash: 15 })
    console.log('Jack auto id', jack.id);

    const tim = await Human.create(
        { fname: 'Ronnald', age: 12, cash: 55 }, 
        { fields: ['age', 'fname' ] }
    ); 
    console.log('TIM', tim.toJSON())

    
})();