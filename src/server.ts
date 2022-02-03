
const {ApolloServer} = require('apollo-server-express');

const express = require('express');

const { typeDefs  } = require('./Schema/typeDefs');
const { resolvers } = require('./Schema/resolvers');


const option = {
    port: 4000,
    endpoint: '/graphql'
}

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    const app = express();

    await server.start();
    server.applyMiddleware({ app, path : '/graphql' });

    app.listen(option, () => console.log(`🚀Server started on port ${option.port} ${option.endpoint}`));
};

// run server
startApolloServer(typeDefs, resolvers);

