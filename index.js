const { ApolloServer, gql } = require('apollo-server');

const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    greeting: String!,
    interestingUrls: [String!]!,
  }
`;

const data = {
    greeting: 'Hello World!',
    interestingUrls: [
        'https://kodemia.mx',
        'https://google.com',
    ],
};

const server = new ApolloServer({ typeDefs, rootValue: data });

server.listen().then(({ url }) => console.log(`Server started at ${url}`));
