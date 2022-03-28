import sequelize from "../seq.js";

(async () => {
    const [results, metadata] = await sequelize.query('SELECT * FROM humans');
    console.log('results', results);
    // console.log('metadata', metadata);
    
})()