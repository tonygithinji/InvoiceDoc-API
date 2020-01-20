import Sequelize, { DataTypes } from "sequelize";

export default (sequelize: Sequelize.Sequelize) => {
    const User: any = sequelize.define("user", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    User.associate = (models: any) => {
        User.hasMany(models.Client, {
            foreignKey: "userId"
        });
    }

    return User;
}