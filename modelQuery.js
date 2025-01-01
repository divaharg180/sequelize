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

    // // Working with out updated table.
    // // 1
    // return User.findAll({ attribute: ['username'] });

    // // 2
    // return User.findAll({ attribute: [['username', 'myName'], ['password', 'pwd']] });

    // // 3 find user using Total how old 
    // return User.findAll({ attributes: [[sequelize.fn('SUM', sequelize.col('age')), 'howOld']] });

    // // 4 find user using AVG how old 
    // return User.findAll({ attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'AVG-old']] });

    // // 5 find user using age 21 value - where 
    // return User.findAll({ where: { age: 21 } });

    //  // 6 find user using age and username value - where 
    //  return User.findAll({ where: { age: 21 , username:'Manoj'} });

    // // 7 find user using - limit 
    // return User.findAll({ limit: 3 });

    // // 8 find user using age - Order By (ASC / DESC)
    // return User.findAll({ order: [['age', 'DESC']] });

    // // 9 find user using username - Group By
    // return User.findAll({
    //     attributes: ['username',
    //         [sequelize.fn('SUM', sequelize.col('age')), 'sum_age']
    //     ],
    //     group: 'username'
    // });

    // // 10 The result is a collection of all rows from the User table that meet the condition: either the username is 'Diva' ***OR** the age is 21.
    // return User.findAll({
    //     where: {
    //         [Op.or]: { username: 'Diva', age: 21 }
    //     }
    // });

    // // 11 The query returns rows that satisfy both conditions:  username is 'Diva' ***AND** the age is 21.
    // return User.findAll({
    //     where: {
    //         [Op.and]: { username: 'Diva', age: 21 }
    //     }
    // });

    // // 12 The query returns age greaterthan 25
    // return User.findAll({
    //     where: {
    //         age: {
    //             [Op.gt]: 25
    //         }
    //     }
    // });

    // // 13 The query returns age less than 25 and equal to null And order by
    // return User.findAll({
    //     where: {
    //         age: {
    //             [Op.or]: {
    //                 [Op.lt]: 25,
    //                 [Op.eq]: null
    //             }
    //         }
    //     },
    //     order: [['age', 'ASC']]
    // });

    // // 13 The query returns CHAR LENGTH IS 5
    // return User.findAll({
    //     where:
    //         sequelize.where(sequelize.fn('char_length', sequelize.col('username')), 5)

    // });

    // // 14 update age/username/password
    // return User.update({ password: "Test1212132132323" }, {
    //     where: { age: 21, user_id:9 }

    // });

    // // 15 update age/username/password - use condition
    // return User.update({ password: "apple@123" }, {
    //     where: {
    //         age: {
    //             [Op.gt]: 25
    //         }
    //     }
    // });

    // // 16 destroy row
    // return User.destroy({ where: { password: "apple@123" } });


    // // 17 Max age
    // return User.max('age');

    // // 18 SUM age
    // return User.sum('age');

    // // or
    //  return User.sum('age', { where: { age: 21 } });

}).then((data) => {
    console.log("user update to database", "and", data);

    // Bulk create object
    data.forEach((element) => {
        console.log(element.toJSON()), "////";
    })

}).catch((err) => {
    console.log(" !!! Error sync Table and Model !!!", err);
})
