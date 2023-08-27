const addFeedback = require("../../models/addfeedback")

exports.saveFeedback = (req, res, next) => {
    try {
        const {title, category, detail} = req.body
        const feedback = new addFeedback({
            title: title,
            category: category,
            detail: detail
        })
        feedback.save()
        .then((res) => res.send("Added"))
        .catch((error) => res.send(error))
    } catch (error) {
        return res.send(error)
    }
}