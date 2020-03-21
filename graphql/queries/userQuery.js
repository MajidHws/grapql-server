const { GraphQLList, GraphQLID, GraphQLInt } = require('graphql')
const {UserType} = require('../types/types')
const User = require('../../db/models/User')

const users = {
    type: new GraphQLList(UserType),
    args: {
        limit: {type: GraphQLInt},
        skip: {type: GraphQLInt},
    },
    resolve: (parent, args) => {
        return User.find({})
        .skip(args.skip)
        .limit(args.limit)
    }
}

const user = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
    },
    resolve: (parent, args) => {
        return User.findById(args.id)
    }
}

module.exports = {
    users,
    user
}