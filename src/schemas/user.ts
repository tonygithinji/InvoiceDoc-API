export default `
    type User {
        id: Int!
        firstName: String!
        lastName: String!
        email: String!
        clients: [Client]
        items: [Item]
    }

    type Query {
        getUser(id: Int!): User!
        allUsers: [User!]!
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
    }
`;