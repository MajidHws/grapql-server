const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } = require('graphql')

const Post = require('../../db/models/Post')
const User = require('../../db/models/User')

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        posts: {
            type: new GraphQLList(PostType),
            args: {
                limit: {type: GraphQLInt},
                skip: {type: GraphQLInt}
            },
            resolve: (parent, args) => {
                return Post.find({userId: parent._id})
                .skip(args.skip)
                .limit(args.limit)
            }
        }
    })
})

const PostType = new GraphQLObjectType({
    name: 'PostType',
    fields: () => ({
        id: {type: GraphQLID},
        title:{type: GraphQLString},
        text: {type: GraphQLString},
        user: {
            type: UserType,
            resolve: (parent, args) => {
                return User.findById(parent.userId)
            }
        }
    })
})

module.exports = {UserType, PostType}