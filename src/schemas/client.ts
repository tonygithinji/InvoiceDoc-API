export default `
    type Client {
        id: Int!
        firstName: String!
        lastName: String
        email: String
        balance: Float
        user: User!
        invoices: [Invoice!]!
    }

    type Query {
        hello: String
    }
`;