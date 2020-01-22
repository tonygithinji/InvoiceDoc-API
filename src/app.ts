import express from "express";
import graphglHTTP from "express-graphql";
import { buildSchema } from "graphql";
import expressPlayground from "graphql-playground-middleware-express";
import cors from "cors";


import models from "./models";
import typeDefs from "./schemas";
import resolvers from "./resolvers";

const schema = buildSchema(typeDefs);

const app = express();
app.use(cors());
app.use("/graphql", graphglHTTP({
    schema,
    rootValue: resolvers,
    context: {
        models,
        user: {
            id: 2
        }
    }
}));
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

models.sequelize.sync().then(() => {
    app.listen(8080, () => console.log("Server ready at http://localhost:8080/graphql"));
});
