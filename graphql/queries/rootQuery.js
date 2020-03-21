const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql')
const { users, user } = require('../queries/userQuery')
const {posts} = require('./postQuert')
const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        users,
        user,
        posts
    }
})

module.exports = RootQuery