import Sequelize, { DataTypes } from "sequelize";

export default (sequelize: Sequelize.Sequelize) => {
    const Client: any = sequelize.define("client", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        physicalAddress: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        billingAddress: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        balance: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        }
    });

    Client.associate = (models: any) => {
        Client.hasMany(models.Invoice, {
            foreignKey: "clientId"
        });

        Client.belongsTo(models.User);
    }

    return Client;
}