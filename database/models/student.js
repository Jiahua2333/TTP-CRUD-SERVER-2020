const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  email: { 
    type: Sequelize.STRING, 
    allowNull: false, 
    validate: {isEmail: true}, 
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://placeholder.pics/svg/100x100/72FF59-7D63FF/83FF60-FFF08C/headshot",
  },
  GPA: {
    type: Sequelize.REAL, 
    validate: {min: 0, max: 4,},
  },
});

module.exports = Student;
