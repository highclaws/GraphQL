import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { makeExecutableSchema } from 'graphql-tools'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'

import schema from './schema'
import resolvers from './resolvers'
import { Person } from'./model'



const execSchemas = makeExecutableSchema({
    typeDefs: schema,
    resolvers
})


const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema:  execSchemas, context: { Person }}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))


app.listen(3000, () => console.log('apps running on port 3000'))