import { DataTypes } from "@sequelize/core";
import sequelize from "../seq.js";
import { arrayJson } from '../util.js'


const Movie = sequelize.define('Moviek', {
    movie_name: DataTypes.STRING
});

const Actor = sequelize.define('Actork', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
});

Movie.belongsToMany(Actor, {
    through: 'MoviesActork'// junction table
});

Actor.belongsToMany(Movie, {
    through: 'MoviesActork'
});

(async () => {

    // await Movie.sync({ alter: true });
    // await Actor.sync({ alter: true });
    // await MoviesActors.sync({ alter: true })

    /*
    sequelize.sync({ alter: true });

    const m1 = await Movie.create({
        movie_name: 'Babysitter'
    });
    const m2 = await Movie.create({ 
        movie_name: 'Harry Potter'
    });
    const a1 = await Actor.create({
        firstname: 'Mary',
        lastname: 'Yusuf'
    });
    const a2 = await Actor.create({
        firstname: 'Michael',
        lastname: 'Scoffied'
    });
    const a3 = await Actor.create({
        firstname: 'Sylvester',
        lastname: 'Stalon'
    });
    const a4 = await Actor.create({
        firstname: 'Joker',
        lastname: 'Spades'
    });
    */


   
})();



