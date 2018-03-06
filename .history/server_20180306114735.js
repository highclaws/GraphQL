const express = require('express')

const mongoose = require('mongoose')

mongooose.connect('mongodb://<dbuser>:<dbpassword>@ds239097.mlab.com:39097/graphqltest')
const app = express()
app.listen(3000, () => console.log('apps running on port 3000'))