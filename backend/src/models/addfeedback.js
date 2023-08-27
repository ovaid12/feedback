const mongoose = require('mongoose')

const {Schema} = mongoose

const addFeedbackSchema = new Schema({
    title:{
        type: String
    },
    category:{
        type: String
    },
    details:{
        type: String
    }
})
const addFeedback = mongoose.model("addFeedback", addFeedbackSchema)
module.exports    = addFeedback