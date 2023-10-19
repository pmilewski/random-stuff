const { ApolloServer, } = require('apollo-server');
const rootValue = require('./rootValue');
const typeDefs = require('./typeDefs');
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, rootValue });

server.listen({port: PORT}).then(({ url }) => console.log(`Server started at ${url}`));
