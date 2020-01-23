export default {
    // Queries
    getItem: ({ id }: any, { models, user }: any) => models.Item.findone({ where: { id, userId: user.id }, include: models.User }),
    allItems: (args: any, { models, user }: any) => models.Item.findAll({ where: { userId: user.id }, include: models.User }),

    // Mutations
    createItem: async (args: any, { models, user }: any) => {
        try {
            await models.Item.create({ ...args, userId: user.id });
            return true;
        } catch (err) {
            console.log("CREATE ITEM", err);
            return false;
        }
    }
}