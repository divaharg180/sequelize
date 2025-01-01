const Sequelize = require('sequelize');

// contructor function
const sequelize = new Sequelize('sequelize-practice', 'root', 'Diva9013@', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

sequelize.authenticate().then(() =>{
    console.log(" *** Connection Successful ***");
}).catch((err) => {
    console.log(" !!! Error Connection Database !!!");

})

console.log("Another Task....")