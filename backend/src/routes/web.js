const express = require('express');
const comments = require('../models/feedback');
const { saveComment } = require('../controllers/commentController/comments');
const { saveFeedback } = require('../controllers/feedbackController/feedback');

const route = express.Router()

route.get('/', (req, res) => {
    res.send("Hello world");
})
route.post('/save/comment', saveComment)
route.post('/save/feedback', saveFeedback)

module.exports = route