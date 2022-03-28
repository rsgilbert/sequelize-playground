import { Sequelize, Model, DataTypes } from '@sequelize/core'
const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: 'localhost', // will translate to IP inside container
    port: '3306',
    username: 'root',
    password: 'root-password',
    database: 'TRY_DB'
});

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user_model' });

(async () => {
    // await sequelize.sync();
    // const joe = await User.create({
    //     username: 'Joe Kasandra',
    //     birthday: new Date(2020, 5, 10)
    // });
    // console.log('jane is', joe.toJSON())

    const j2 = await User.findOne({ username: 'Joe Kasanddra' })
    console.log('found j2 is ', j2.toJSON())

    // test connection
    await sequelize.authenticate();
    console.log('connection fine')
})();