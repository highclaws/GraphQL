const express = require('express')
const mongoose = require('mongoose')
const { makeExecutableSchema } = require ('graphql-tools')
const { graphqlExpress, graphiqlExpress } = require ('appolo-server-express')

const { Person } =  require('./model')
const schema = require('./schema')
const resolvers = require('./resolvers.js')

mongoose.connect('mongodb://username:username@ds239097.mlab.com:39097/graphqltest')


const app = express()
app.listen(3000, () => console.log('apps running on port 3000'))