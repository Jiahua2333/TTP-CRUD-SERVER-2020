const pgtools = require("pgtools");

// An object with user, host, port, and password properties;
// const config =  {
//   user: "ljh15",
//   host: "localhost",
//   port: 5432,
//   password: process.env.LOCAL_DATABASE_PASSWORD,
// };
// const config = '	postgres://wittearx:sShleFOWYy5SvecDPEsi4kNX2hCdlprW@hansken.db.elephantsql.com:5432/wittearx';
const config = "postgres://ljh15:3112001944ljh@localhost:5432/ttp-crud-server"
// The name of the database to create;
const databaseName = require("./databaseName");

// A callback that takes an error argument;
// If cb is omitted the function will return a Promise;
const cb = (err, res) => {
  console.log(`Attempting to create the database: ${databaseName}!`);

  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log(res);
  console.log(`Successfully created the database: ${databaseName}!`);
};

const createLocalDatabase = () => pgtools.createdb(config, databaseName, cb);
console.log(config, databaseName);
module.exports = createLocalDatabase;
