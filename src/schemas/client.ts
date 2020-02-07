export default `
    type Client {
        id: Int!
        firstName: String!
        lastName: String!
        email: String
        phoneNumber: String
        physicalAddress: String
        billingAddress: String
        balance: Float
        user: User!
        invoices: [Invoice!]!
    }

    type Query {
        getClient(id: Int!): Client!
        allClients: [Client!]!
        searchClient(query: String): [Client!]!
    }

    type Mutation {
        createClient(firstName: String!, lastName: String!, email: String, phoneNumber: String, physicalAddress: String, billingAddress: String): Boolean!
    }
`;