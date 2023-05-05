const { Sequelize } = require('sequelize');
const server = require('./App');
const PORT = 3001;
const { conn } = require('./DB_connection');

server.listen(PORT, async () => {
    await conn.sync({force:true});
    console.log(`Server raised in port: ${PORT}`);
});