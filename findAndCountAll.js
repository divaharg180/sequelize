const { raw } = require('mysql2');
const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;

// contructor function
const sequelize = new Sequelize('sequelizetest', 'root', 'Diva9013@', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 6]
        }
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21
    },
    wittCodeRocks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }
);


User.sync({ alter: true }).then(() => {

    return User.findAndCountAll({
        where: { username: "Raja" },
        raw: true
    });
}).then((data) => {
    console.log("user update to database", "and", data);
    //  console.log(data.toJSON()), "777777";
    const { count, rows } = data;
    console.log(count);
    console.log(rows);

}).catch((err) => {
    console.log(" !!! Error sync Table and Model !!!", err);
})
