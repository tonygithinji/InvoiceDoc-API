import { Sequelize } from "sequelize";
import sequelize from "../db/sequelize";

const models: any = {
    User: sequelize.import("./user"),
    Client: sequelize.import("./client"),
    Invoice: sequelize.import("./invoice"),
    Item: sequelize.import("./item"),
    InvoiceItem: sequelize.import("./invoiceItem")
}

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
