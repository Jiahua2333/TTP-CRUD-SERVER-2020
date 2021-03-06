const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  //console.log("creating table");
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({ 
      firstName: "Daniel",
      lastName: "Green",
      email: "example@gmail.com",
      GPA: 3.5,
      campusId: 2
    }),
    Student.create({ 
      firstName: "Sally",
      lastName: "Moon",
      email: "example2@gmail.com",
      GPA: 3,
      campusId: 1 
    }),
  ]);
};

module.exports = seedDatabase;
