import { DataTypes } from "@sequelize/core";
import sequelize from "../seq.js";
import { arrayJson } from '../util.js'

const Team = sequelize.define('team', {
    team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    captain: DataTypes.STRING
})

const Player = sequelize.define('player', {
    name: DataTypes.STRING,
    position: DataTypes.INTEGER
});

Team.hasMany(Player, {
    foreignKey: {
        allowNull: false,
        name: 'team_id'
    }
});
Player.belongsTo(Team, {
    foreignKey: {
        name: 'team_id'
    }
}); // Player will get teamId property



(async () => {
    // await Team.sync({ alter: true });
    // await Player.sync({ alter: true });

    // const tm1 = await Team.create({ 
    //     team_id: 1,
    //     name: 'Chelse',
    //     captain: 'John Terry'
    // })
    // console.log(tm1);

    const tm2 = await Team.findByPk(1);

    // const p1 = await Player.create({
    //     name: 'Hazard',
    //     position: 10,
    //     team_id: tm2.team_id
    // });
    // const p2 = await Player.create({
    //     name: 'James',
    //     position: 11,
    //     team_id: tm2.team_id
    // });
    // const p3 = await Player.create({
    //     name: 'De Gea',
    //     position: 1,
    //     team_id: 0
    // });

    // tm2.destroy();
    const ps = await Player.findAll({
        where: {
            team_id: tm2.team_id
        }
    });
    

    console.log(arrayJson(ps));

})();

