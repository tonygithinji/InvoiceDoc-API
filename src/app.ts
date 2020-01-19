import express from "express";
import graphglHTTP from "express-graphql";
import { schema } from "./schema";

import models from "./models";

const resolvers = {
    hello: () => "Hello World"
};

const app = express();
app.use("/graphql", graphglHTTP({
    schema,
    rootValue: resolvers
}));

models.sequelize.sync({ force: true }).then(() => {
    app.listen(8080, () => console.log("Server ready at http://localhost:8080/graphql"));
});
