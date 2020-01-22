export default {
    // Queries
    getItem: ({ id }: any, { models }: any) => models.Item.findOne({ where: { id } }),
    allItems: (args: any, { models }: any) => models.Item.findAll(),

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