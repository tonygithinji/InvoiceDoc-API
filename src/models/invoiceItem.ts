import Sequelize, { DataTypes } from "sequelize";

export default (sequelize: Sequelize.Sequelize) => {
    const InvoiceItem: any = sequelize.define('invoiceItem', {
        name: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        qty: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        rate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });

    InvoiceItem.associate = (models: any) => {
        InvoiceItem.belongsTo(models.Invoice);
    };

    return InvoiceItem;
}