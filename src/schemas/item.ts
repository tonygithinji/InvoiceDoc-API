export default `
    type Item {
        id: Int!
        name: String!
        price: Float!
        type: Int!
        unit: String!
        description: String
        user: User
    }

    type Query {
        getItem(id: Int!): Item!
        allItems: [Item!]!
    }

    type Mutation {
        createItem(name: String!, price: Float!, type: Int!, unit: String!, description: String): Boolean!
    }
`;