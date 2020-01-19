import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5432/invoicedoc", {
    dialect: "postgres",
    timezone: "+00:00"
});

export default sequelize;