import { Sequelize } from '@sequelize/core'
const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: 'localhost', // will translate to IP inside container
    port: '3306',
    username: 'root',
    password: 'root-password',
    database: 'TRY_DB',
    define: {
        freezeTableName: true,
        // createdAt: false,
        // updatedAt: false
    }
});

export default sequelize;
