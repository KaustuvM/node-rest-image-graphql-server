/*
 * Class - Application
 */
'use strict'
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./src/graphql/schema')
const resolvers = require('./src/graphql/resolvers')
const winston = require('./src/config/winston')
const Router = require('./src/routers/router.js')
const Middleware = require('./src/middlewares/middleware.js')

/*
 * Class - Application
 */

const HTTP_PORT = 3000

class Application {

    static async run(app) {
        // Mount Middlewares
        Middleware.initialize(app)

        // Mount Routes
        Router.mountRoutes(app)

        // Start Apollo
        const server = new ApolloServer({
            typeDefs,
            resolvers,
        })
        await server.start()

        // Attach express with Apollo
        server.applyMiddleware({ app })

        // Create HTTP server
        global.server = app.listen(process.env.PORT || 3000, () => {
            winston.info(`Server ready at http://localhost:${process.env.PORT || 3000}${server.graphqlPath}`)
        })
    }

    static close() {
        global.server.close()
    }
}

module.exports = Application
