export default `
    type Invoice {
        id: Int!
        invoiceNumber: String!
        amount: Float!
        status: Int!
        viewed: Int!
        createdAt: String!
        client: Client!
        items: [InvoiceItem!]!
    }

    input InvoiceInput {
        invoiceNumber: String!
        amount: Float!
        status: Int!
        clientId: Int!
    }

    input InvoiceItemInput {
        name: String!
        qty: Float!
        rate: Float!
        amount: Float!
    }

    type Query {
        getInvoice(id: Int!): Invoice!
        allInvoices: [Invoice!]!

    }

    type Mutation {
        createInvoice(invoice: InvoiceInput, invoiceItems: [InvoiceItemInput]): Boolean!
    }
`;