import path from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

const types = fileLoader(path.join(__dirname, '.'));

export default mergeTypes(types);