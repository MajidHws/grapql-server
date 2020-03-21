const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {type: mongoose.Schema.Types.String},
    text: {type: mongoose.Schema.Types.String},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

PostSchema.virtual('comments', {
    localField: '_id',
    foreignField: 'postId',
    ref: 'Comment'
})

PostSchema.virtual('user', {
    justOne: true,
    localField: 'userId',
    foreignField: '_id',
    ref: 'User'
})

module.exports = new mongoose.model('Post', PostSchema)