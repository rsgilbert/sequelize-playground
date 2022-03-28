import sequelize from "../seq.js";
import { Human } from "../human.js";
import { arrayJson } from "../util.js";
import { Op } from "@sequelize/core";

(async () =>{
    // count
    // const c1 = await Human.count({
    //     where: {
    //         age: {
    //             [Op.gt]: 5
    //         }
    //     }
    // })
    // console.log(c1)

    // const c1 = await Human.count({
    //     group: 'fname'
    // })
    // console.log(c1)


    // // max
    // const mx1 = await Human.max(
    //     'cash', { 
    //         where: { 
    //             fname: {
    //                 [Op.eq]: 'No name'
    //             }
    //         }
    //     }
    // )
    // console.log(mx1)

    // min
    // const mn1 = await Human.min(
    //     'fname', { 
    //         where: { 
    //             fname: {
    //                 [Op.not]: 'No name'
    //             }
    //         }
    //     }
    // )
    // console.log(mn1)

    // // increment
    // const h1 = await Human.increment(
    //     { age: 3 },
    //     { where: {
    //         cash: {
    //             [Op.lt]: 0
    //         }
    //     } }
    // )
    // console.log(h1)

    // decrement
    // increment
    const h2 = await Human.decrement(
        { cash: 20 },
        { where: {
            fname: {
                [Op.eq]: 'No name'
            }
        } }
    )
    console.log(h2)
})();