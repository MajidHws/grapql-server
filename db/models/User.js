const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String},
    age: {type: mongoose.Schema.Types.Number}
})

UserSchema.virtual('posts', {
    localField: '_id',
    foreignField: 'userId',
    ref: 'Post'
})

module.exports = new mongoose.model('User', UserSchema)