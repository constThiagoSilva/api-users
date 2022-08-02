import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config.js")[env];

const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, config);

// (async () => {
//   await sequelize.sync({ force: true });
// })();

export { Sequelize, sequelize };
