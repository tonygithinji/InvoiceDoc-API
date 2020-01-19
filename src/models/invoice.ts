import Sequelize, { DataTypes } from "sequelize";

export default (sequelize: Sequelize.Sequelize) => {
    const Invoice: any = sequelize.define("invoice", {
        invoiceNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: DataTypes.DECIMAL(10, 2),
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: "0 - Draft, 1 - Sent,Unpaid, 2 - Paid"
        },
        viewed: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: "0 - Not Viewed, 1 - Viewed"
        }
    });

    Invoice.associate = (models: any) => {
        Invoice.belongsTo(models.Client);
    }

    return Invoice;
}