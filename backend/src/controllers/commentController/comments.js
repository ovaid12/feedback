const comments = require("../../models/feedback")

exports.saveComment = (req, res, next) => {
    try {
        const {comment, feedbackId} = req.body
    const com = new comments({
        content: comment,
        feedback_id: feedbackId,
    })
    com.save()
    .then((res) => res.send(res))
    .catch((error) => res.send(error))
    } catch (error) {
        res.send(error)
    }
}