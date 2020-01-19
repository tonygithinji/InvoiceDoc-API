import sequelize from "../db/sequelize";

const models: any = {
    User: sequelize.import("./user"),
    Client: sequelize.import("./client"),
    Invoice: sequelize.import("./invoice"),
}

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;

export default models;
