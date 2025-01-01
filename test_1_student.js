const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;


const sequelize = new Sequelize('sequelizeTest', 'root', 'Diva9013@', {
    dialect: 'mysql'
});


const Student = sequelize.define('student', {
    stu_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 10]
        }
    },
    favorite: {
        type: DataTypes.STRING(25),
        defaultValue: 'Computer'
    },

    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    present: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {
    freezeTableName: true,
    timestamps: false
})

Student.sync().then(() => {
    console.log(" *** student Table and Model synced Successfully ***");

    // return Student.bulkCreate([
    //     {
    //         name: "DDDDDD",
    //         year: "2025",
    //         present: false
    //     },
    //     {
    //         name: "EEEEE",
    //         favorite: "English",
    //         year: "2024"
    //     },
    //     {
    //         name: "FFFFFF",
    //         year: "2024"
    //     },

    // ], { validate: true });

    // // GET favorite Computer or present is true
    // return Student.findAll({
    //     attributes:['name'],
    //     where: {

    //         [Op.or]: { favorite: 'Computer', present: true }

    //     }
    // });

    // // year with no of students
    return Student.findAll({
        attributes: [
            'year',
            [sequelize.fn('COUNT', sequelize.col('year')), 'num_of_students']
        ],
        group: 'year'
    });
}).then((data) => {
    console.log("user update to database", "and", data);

    // Bulk create object
    data.forEach((element) => {
        console.log(element.toJSON()), "////";
    })

}).catch((err) => {
    console.log(" !!! Error sync Table and Model !!!", err);
})
