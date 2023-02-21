module.exports.index_1 = function (req,res) {
    return res.json(200, {
        message: " New list of posts",
        posts: []
    })
}