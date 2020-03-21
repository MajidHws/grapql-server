const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    text: {type: mongoose.Schema.Types.String},
    postId: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    userId: {type: mongoose.Schema.Types.ObjectId}
})

CommentSchema.virtual('post', {
    justOne: true,
    localField: 'PostId',
    foreignField: '_id'
})


module.exports = new mongoose.model('Comment', CommentSchema)