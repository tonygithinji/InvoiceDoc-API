import Sequelize, { DataTypes } from "sequelize";

export default (sequelize: Sequelize.Sequelize) => {
    const Client: any = sequelize.define("client", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        balance: DataTypes.DECIMAL(10, 2)
    });

    Client.associate = (models: any) => {
        Client.hasMany(models.Invoice, {
            foreignKey: "clientId"
        });

        Client.belongsTo(models.User);
    }

    return Client;
}