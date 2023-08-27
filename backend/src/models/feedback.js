const mongoose = require('mongoose')
const {Schema} = mongoose
const commentSchema = new Schema({
    content: {
        type: String,
    },
    feedback_id: {
        type: Number
    }
})
const comments = mongoose.model('comments', commentSchema)
module.exports = comments