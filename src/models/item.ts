import Sequelize, { DataTypes } from "sequelize";

export default (sequelize: Sequelize.Sequelize) => {
    const Item: any = sequelize.define("item", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        type: {
            type: DataTypes.SMALLINT,
            defaultValue: 1,
            comment: "1 - Goods, 2 - Service"
        },
        unit: {
            type: DataTypes.STRING,
            defaultValue: "pcs",
        },
        description: {
            type: DataTypes.TEXT({ length: "medium" })
        }
    });

    Item.associate = (models: any) => {
        Item.belongsTo(models.User);
    }

    return Item;
};