export default {
    // Queries
    getInvoice: ({ id }: any, { models, user }: any) => models.Invoice.findOne({ where: { id, userId: user.id }, include: models.InvoiceItem }),
    allInvoices: (args: any, { models, user }: any) => models.Invoice.findAll({ where: { userId: user.id } }),

    // Mutations
    createInvoice: async (args: any, { models, user }: any) => {
        try {
            const invoice = await models.Invoice.create({ ...args.invoice, userId: user.id });

            for (const item of args.invoiceItems) {
                await models.InvoiceItem.create({ ...item, invoiceId: invoice.id });
            }
            return true;
        } catch (err) {
            console.log("CREATE INVOICE", err);
            return false;
        }
    }
};