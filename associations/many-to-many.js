import { DataTypes } from "@sequelize/core";
import sequelize from "../seq.js";
import { arrayJson } from '../util.js'


const Movie = sequelize.define('Movied', {
    movie_name: DataTypes.STRING
});

const Actor = sequelize.define('Actord', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
});

// explicitly define junction table. Notice that by default it will add an extra column for id 
const MoviesActors = sequelize.define('MoviesActord', {
    movieId: {
        type: DataTypes.INTEGER,
        references:{
            model: Movie,
            key: 'id'
        }
    },
    actorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Actor,
            key: 'id'
        }
    }
});

Movie.belongsToMany(Actor, {
    through: MoviesActors// junction table
});

Actor.belongsToMany(Movie, {
    through: MoviesActors
});

(async () => {

    // await Movie.sync({ alter: true });
    // await Actor.sync({ alter: true });
    // await MoviesActors.sync({ alter: true })

    sequelize.sync({ alter: true });
   
})();



