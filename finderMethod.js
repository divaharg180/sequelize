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

    // // 1. With raw: true: Output is a simple array of objects. Without raw: true: Output includes Sequelize model instances with additional metadata and methods.

    // return User.findAll({ raw: true });
    // // or
    // return User.findAll({
    //     where: { age: 25 },
    //     raw: true

    // });

    // // //2.  The findByPk method in Sequelize is used to retrieve a single record from a table by its primary key.
    // return User.findByPk(9);

    // // 3. The findOne method in Sequelize is used to retrieve a single record from the database that matches the provided conditions. If no conditions are provided, it will return the first record found in the table (according to the order defined by Sequelize or the database
    // return User.findOne();
    // // or

    // return User.findOne({
    //     where: {
    //         age: {
    //             [Op.or]: {
    //                 [Op.gt]: 25,
    //                 [Op.eq]: 25
    //             }
    //         }
    //     }
    // });

    // // // 4.The findOrCreate method in Sequelize is used to find a record that matches the provided condition(s), or if it doesn't exist, create a new record with the specified data.
    // return User.findOrCreate({
    //     where: { username: "sekar" }
    // });

    // // or
    return User.findOrCreate({
        where: { username: "Raja" },
        defaults: {
            age: 50
        }
    });
}).then((data) => {
    console.log("user update to database", "and", data);
    //  console.log(data.toJSON()), "777777";

    // Bulk create object
    data.forEach((element) => {
        console.log(element.toJSON()), "////";
    })

}).catch((err) => {
    console.log(" !!! Error sync Table and Model !!!", err);
})
