import express = require('express')
import mongoose = require('mongoose')
import { makeExecutableSchema } = require ('graphql-tools')
import { graphqlExpress, graphiqlExpress } = require ('apollo-server-express')

import { Person } =  require('./model')
import schema = require('./schema')
import resolvers = require('./resolvers.js')


mongoose.connect('mongodb://username:username@ds239097.mlab.com:39097/graphqltest')

const execSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers
})


const app = express()

app.use('/graphql', express.json(), graphqlExpress({  schema: excSchema, context: { Person }}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(3000, () => console.log('apps running on port 3000'))