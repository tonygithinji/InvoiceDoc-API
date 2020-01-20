export default `
    type Invoice {
        id: Int!
        invoiceNumber: String!
        amount: Float!
        status: Int!
        viewed: Int!
        createdAt: String!
        client: Client!
    }
`;