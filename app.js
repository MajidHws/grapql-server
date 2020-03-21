const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema/schema')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, async () => {
    require('./db/connection')
    console.log('server is up and running.'.toUpperCase())

})