const {GraphQLSchema} = require('graphql')
const RootQuery = require('../queries/rootQuery')

module.exports = new GraphQLSchema({
    query: RootQuery
})