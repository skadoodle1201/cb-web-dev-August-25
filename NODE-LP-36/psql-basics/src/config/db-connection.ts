import { Sequelize } from "sequelize";

const dbConfig = {
  databaseName: process.env.DB_NAME || "my_database",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "password",
  host: process.env.HOST || "localhost",
};

export const psqlConnectionSequelize = new Sequelize(
  dbConfig.databaseName,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "postgres",
  },
);

export const connect = async () => {
  try {
    await psqlConnectionSequelize.authenticate();
    await psqlConnectionSequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
