const { GraphQLList, GraphQLInt } = require('graphql')
const {PostType} = require('../types/types')
const Post = require('../../db/models/Post')

const posts = {
    type: new GraphQLList(PostType),
    args: {
        limit: { type: GraphQLInt },
        skip: { type: GraphQLInt }
    },
    resolve: (parent, args) => {
        return Post.find({})
            .skip(args.skip)
            .limit(args.limit)
    }
}


module.exports = {
    posts
}