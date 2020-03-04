const { Sequelize, Model, DataTypes } = require('sequelize');

/*const sequelize = new Sequelize('mysql://localhost:1443/SQLEXPRESS01', {
    host: 'localhost\\SQLEXPRESS01',
    dialect: 'mssql',
    logging: false,
    database: 'testDB',
    name: 'SQLEXPRESS01',
    username: 'testuser',
    password: 'user',
    port: '1443',
});*/

const sequelize = new Sequelize('testDB', 'admin', 'abc1234567890', {
    //host: 'localhost',
    dialect:'mssql',
    logging: false,
});

class User extends Model { }
User.init({
    username: DataTypes.STRING,
    passwort: DataTypes.STRING
}, { sequelize, modelName: 'user' });

(async () => {
    await sequelize.sync();
    console.log(sequelize.Sequelize)
    const jane = await User.create({
        username: 'janedoe',
        passwort: 'testPasswort123'
    });
    console.log(jane.toJSON());
    sequelize.close();
})();