const Sequelize = require('sequelize');

// contructor function
const sequelize = new Sequelize('sequelizetest', 'root', 'Diva9013@', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

// //connection check
// sequelize.authenticate().then(() =>{
//     console.log(" *** Connection Successful ***");
// }).catch((err) => {
//     console.log(" !!! Error Connection Database !!!");

// })

// Table create with data type
const User = sequelize.define('user', {
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 21
    },
    wittCodeRocks: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }
);

User.sync({ alter: true }).then(() => {
    console.log(" *** Table and Model synced Successfully ***");

    // working with our updated table

    //TODO: // 1 way
    // const user = User.build({username:'Diva', password:'123', wittCodeRocks:true});
    // user.username='Manoj';
    // return user.save();

    // TODO:// // 2 way
    // return User.create({
    //     username: "call",
    //     password: "trety",
    //     age: 25, // optional else take default value age
    //     wittCodeRocks: true // optional else take default value true
    // })

    // TODO:// // 2 way
    return User.bulkCreate([
        {
            username: "deva",
            age: 25,
            password: "54gh254",
        },
        {
            username: "guna",
            age: 22,
            password: "424n2",
        },
        {
            username: "hari",
            age: 23,
            password: "4242gh",
        }
    ])

}).then((data) => {
    console.log("user update to database");

    // TODO:// // update - way 1
    // data.username = 'jeeva';
    // data.age = 22;
    // return data.save();

    // // delete payload
    // return data.destroy();

    //    // reload prev data payload without any update
    //     return data.reload();


    // // TODO:// // update - way 2
    // data.decrement({ age: 2 });

  // console.log('user updated', data);
    // // single create object
    // console.log(data.toJSON());

    // Bulk create object
    data.forEach((element) => {
        console.log("22222");

        console.log(element.toJSON(), "22222");

    })

}).catch((err) => {
    console.log(" !!! Error sync Table and Model !!!");
})


