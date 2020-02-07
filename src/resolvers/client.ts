import Sequelize from "sequelize";

const Op = Sequelize.Op;

export default {
    // Queries
    getClient: ({ id }: any, { models, user }: any) => models.Client.findOne({ where: { id, userId: user.id } }),
    allClients: (args: any, { models, user }: any) => models.Client.findAll({ where: { userId: user.id } }),
    searchClient: ({ query }: any, { models, user }: any) => models.Client.findAll({
        where: {
            [Op.and]: [
                { userId: user.id },
                {
                    [Op.or]: [
                        { firstName: { [Op.iLike]: `${query}%` } },
                        { lastName: { [Op.iLike]: `${query}%` } },
                        { email: { [Op.iLike]: `%${query}%` } },
                        { phoneNumber: { [Op.iLike]: `%${query}%` } },
                    ]
                }
            ]
        }
    }),

    // Mutations
    createClient: async (args: any, { models, user }: any) => {
        try {
            await models.Client.create({ ...args, userId: user.id });
            return true;
        } catch (err) {
            console.log("CREATE CLIENT", err);
            return false;
        }
    }
};