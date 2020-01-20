export default {
    // Queries
    getUser: ({ id }: any, { models }: any) => models.User.findOne({ where: { id } }),
    allUsers: (args: any, { models }: any) => models.User.findAll(),

    // Mutations
    createUser: (args: any, { models }: any) => models.User.create(args)
}